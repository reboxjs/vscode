/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CommentThread, DocumentCommentProvider, CommentThreadChangedEvent, CommentInfo, Comment, CommentReaction, CommentingRanges } from 'vs/editor/common/modes';
import { createDecorator } from 'vs/platform/instantiation/common/instantiation';
import { Event, Emitter } from 'vs/base/common/event';
import { Disposable } from 'vs/base/common/lifecycle';
import { URI } from 'vs/base/common/uri';
import { Range, IRange } from 'vs/editor/common/core/range';
import { keys } from 'vs/base/common/map';
import { CancellationToken } from 'vs/base/common/cancellation';
import { assign } from 'vs/base/common/objects';
import { ICommentThreadChangedEvent } from 'vs/workbench/contrib/comments/common/commentModel';
import { MainThreadCommentController } from 'vs/workbench/api/electron-browser/mainThreadComments';

export const ICommentService = createDecorator<ICommentService>('commentService');

export interface IResourceCommentThreadEvent {
	resource: URI;
	commentInfos: ICommentInfo[];
}

export interface ICommentInfo extends CommentInfo {
	owner: string;
}

export interface IWorkspaceCommentThreadsEvent {
	ownerId: string;
	commentThreads: CommentThread[];
}

export interface ICommentService {
	_serviceBrand: any;
	readonly onDidSetResourceCommentInfos: Event<IResourceCommentThreadEvent>;
	readonly onDidSetAllCommentThreads: Event<IWorkspaceCommentThreadsEvent>;
	readonly onDidUpdateCommentThreads: Event<ICommentThreadChangedEvent>;
	readonly onDidChangeActiveCommentThread: Event<CommentThread | null>;
	readonly onDidChangeActiveCommentingRange: Event<{ range: Range, commentingRangesInfo: CommentingRanges }>;
	readonly onDidChangeInput: Event<string>;
	readonly onDidSetDataProvider: Event<void>;
	readonly onDidDeleteDataProvider: Event<string>;
	setDocumentComments(resource: URI, commentInfos: ICommentInfo[]): void;
	setWorkspaceComments(owner: string, commentsByResource: CommentThread[]): void;
	removeWorkspaceComments(owner: string): void;
	registerCommentController(owner: string, commentControl: MainThreadCommentController): void;
	registerDataProvider(owner: string, commentProvider: DocumentCommentProvider): void;
	unregisterDataProvider(owner: string): void;
	updateComments(ownerId: string, event: CommentThreadChangedEvent): void;
	createNewCommentThread(owner: string, resource: URI, range: Range, text: string): Promise<CommentThread | null>;
	replyToCommentThread(owner: string, resource: URI, range: Range, thread: CommentThread, text: string): Promise<CommentThread | null>;
	editComment(owner: string, resource: URI, comment: Comment, text: string): Promise<void>;
	deleteComment(owner: string, resource: URI, comment: Comment): Promise<boolean>;
	getComments(resource: URI): Promise<(ICommentInfo | null)[]>;
	getCommentingRanges(resource: URI): Promise<IRange[]>;
	startDraft(owner: string, resource: URI): void;
	deleteDraft(owner: string, resource: URI): void;
	finishDraft(owner: string, resource: URI): void;
	getStartDraftLabel(owner: string): string | undefined;
	getDeleteDraftLabel(owner: string): string | undefined;
	getFinishDraftLabel(owner: string): string | undefined;
	addReaction(owner: string, resource: URI, comment: Comment, reaction: CommentReaction): Promise<void>;
	deleteReaction(owner: string, resource: URI, comment: Comment, reaction: CommentReaction): Promise<void>;
	getReactionGroup(owner: string): CommentReaction[] | undefined;
	setActiveCommentThread(commentThread: CommentThread | null);
	setInput(input: string);
}

export class CommentService extends Disposable implements ICommentService {
	_serviceBrand: any;

	private readonly _onDidSetDataProvider: Emitter<void> = this._register(new Emitter<void>());
	readonly onDidSetDataProvider: Event<void> = this._onDidSetDataProvider.event;

	private readonly _onDidDeleteDataProvider: Emitter<string> = this._register(new Emitter<string>());
	readonly onDidDeleteDataProvider: Event<string> = this._onDidDeleteDataProvider.event;

	private readonly _onDidSetResourceCommentInfos: Emitter<IResourceCommentThreadEvent> = this._register(new Emitter<IResourceCommentThreadEvent>());
	readonly onDidSetResourceCommentInfos: Event<IResourceCommentThreadEvent> = this._onDidSetResourceCommentInfos.event;

	private readonly _onDidSetAllCommentThreads: Emitter<IWorkspaceCommentThreadsEvent> = this._register(new Emitter<IWorkspaceCommentThreadsEvent>());
	readonly onDidSetAllCommentThreads: Event<IWorkspaceCommentThreadsEvent> = this._onDidSetAllCommentThreads.event;

	private readonly _onDidUpdateCommentThreads: Emitter<ICommentThreadChangedEvent> = this._register(new Emitter<ICommentThreadChangedEvent>());
	readonly onDidUpdateCommentThreads: Event<ICommentThreadChangedEvent> = this._onDidUpdateCommentThreads.event;

	private readonly _onDidChangeActiveCommentThread: Emitter<CommentThread> = this._register(new Emitter<CommentThread>());
	readonly onDidChangeActiveCommentThread: Event<CommentThread | null> = this._onDidChangeActiveCommentThread.event;

	private readonly _onDidChangeInput: Emitter<string> = this._register(new Emitter<string>());
	readonly onDidChangeInput: Event<string> = this._onDidChangeInput.event;
	private readonly _onDidChangeActiveCommentingRange: Emitter<{
		range: Range, commentingRangesInfo:
		CommentingRanges
	}> = this._register(new Emitter<{
		range: Range, commentingRangesInfo:
		CommentingRanges
	}>());
	readonly onDidChangeActiveCommentingRange: Event<{ range: Range, commentingRangesInfo: CommentingRanges }> = this._onDidChangeActiveCommentingRange.event;

	private _commentProviders = new Map<string, DocumentCommentProvider>();

	private _commentControls = new Map<string, MainThreadCommentController>();

	constructor() {
		super();
	}

	setActiveCommentThread(commentThread: CommentThread | null) {
		this._onDidChangeActiveCommentThread.fire(commentThread);
	}

	setInput(input: string) {
		this._onDidChangeInput.fire(input);
	}

	setDocumentComments(resource: URI, commentInfos: ICommentInfo[]): void {
		this._onDidSetResourceCommentInfos.fire({ resource, commentInfos });
	}

	setWorkspaceComments(owner: string, commentsByResource: CommentThread[]): void {
		this._onDidSetAllCommentThreads.fire({ ownerId: owner, commentThreads: commentsByResource });
	}

	removeWorkspaceComments(owner: string): void {
		this._onDidSetAllCommentThreads.fire({ ownerId: owner, commentThreads: [] });
	}

	registerCommentController(owner: string, commentControl: MainThreadCommentController): void {
		this._commentControls.set(owner, commentControl);
		this._onDidSetDataProvider.fire();
	}

	registerDataProvider(owner: string, commentProvider: DocumentCommentProvider): void {
		this._commentProviders.set(owner, commentProvider);
		this._onDidSetDataProvider.fire();
	}

	unregisterDataProvider(owner: string): void {
		this._commentProviders.delete(owner);
		this._onDidDeleteDataProvider.fire(owner);
	}

	updateComments(ownerId: string, event: CommentThreadChangedEvent): void {
		const evt: ICommentThreadChangedEvent = assign({}, event, { owner: ownerId });
		this._onDidUpdateCommentThreads.fire(evt);
	}

	async createNewCommentThread(owner: string, resource: URI, range: Range, text: string): Promise<CommentThread | null> {
		const commentProvider = this._commentProviders.get(owner);

		if (commentProvider) {
			return await commentProvider.createNewCommentThread(resource, range, text, CancellationToken.None);
		}

		return null;
	}

	async replyToCommentThread(owner: string, resource: URI, range: Range, thread: CommentThread, text: string): Promise<CommentThread | null> {
		const commentProvider = this._commentProviders.get(owner);

		if (commentProvider) {
			return await commentProvider.replyToCommentThread(resource, range, thread, text, CancellationToken.None);
		}

		return null;
	}

	editComment(owner: string, resource: URI, comment: Comment, text: string): Promise<void> {
		const commentProvider = this._commentProviders.get(owner);

		if (commentProvider) {
			return commentProvider.editComment(resource, comment, text, CancellationToken.None);
		}

		return Promise.resolve(undefined);
	}

	deleteComment(owner: string, resource: URI, comment: Comment): Promise<boolean> {
		const commentProvider = this._commentProviders.get(owner);

		if (commentProvider) {
			return commentProvider.deleteComment(resource, comment, CancellationToken.None).then(() => true);
		}

		return Promise.resolve(false);
	}

	async startDraft(owner: string, resource: URI): Promise<void> {
		const commentProvider = this._commentProviders.get(owner);

		if (commentProvider && commentProvider.startDraft) {
			return commentProvider.startDraft(resource, CancellationToken.None);
		} else {
			throw new Error('Not supported');
		}
	}

	async deleteDraft(owner: string, resource: URI): Promise<void> {
		const commentProvider = this._commentProviders.get(owner);

		if (commentProvider && commentProvider.deleteDraft) {
			return commentProvider.deleteDraft(resource, CancellationToken.None);
		} else {
			throw new Error('Not supported');
		}
	}

	async finishDraft(owner: string, resource: URI): Promise<void> {
		const commentProvider = this._commentProviders.get(owner);

		if (commentProvider && commentProvider.finishDraft) {
			return commentProvider.finishDraft(resource, CancellationToken.None);
		} else {
			throw new Error('Not supported');
		}
	}

	async addReaction(owner: string, resource: URI, comment: Comment, reaction: CommentReaction): Promise<void> {
		const commentProvider = this._commentProviders.get(owner);

		if (commentProvider && commentProvider.addReaction) {
			return commentProvider.addReaction(resource, comment, reaction, CancellationToken.None);
		} else {
			throw new Error('Not supported');
		}
	}

	async deleteReaction(owner: string, resource: URI, comment: Comment, reaction: CommentReaction): Promise<void> {
		const commentProvider = this._commentProviders.get(owner);

		if (commentProvider && commentProvider.deleteReaction) {
			return commentProvider.deleteReaction(resource, comment, reaction, CancellationToken.None);
		} else {
			throw new Error('Not supported');
		}
	}

	getReactionGroup(owner: string): CommentReaction[] | undefined {
		const commentProvider = this._commentProviders.get(owner);

		if (commentProvider) {
			return commentProvider.reactionGroup;
		}

		return undefined;
	}

	getStartDraftLabel(owner: string): string | undefined {
		const commentProvider = this._commentProviders.get(owner);

		if (commentProvider) {
			return commentProvider.startDraftLabel;
		}

		return undefined;
	}

	getDeleteDraftLabel(owner: string): string | undefined {
		const commentProvider = this._commentProviders.get(owner);

		if (commentProvider) {
			return commentProvider.deleteDraftLabel;
		}

		return undefined;
	}

	getFinishDraftLabel(owner: string): string | undefined {
		const commentProvider = this._commentProviders.get(owner);

		if (commentProvider) {
			return commentProvider.finishDraftLabel;
		}

		return undefined;
	}

	async getComments(resource: URI): Promise<(ICommentInfo | null)[]> {
		const result: Promise<ICommentInfo | null>[] = [];
		for (const owner of keys(this._commentProviders)) {
			const provider = this._commentProviders.get(owner);
			if (provider && provider.provideDocumentComments) {
				result.push(provider.provideDocumentComments(resource, CancellationToken.None).then(commentInfo => {
					if (commentInfo) {
						return <ICommentInfo>{
							owner: owner,
							threads: commentInfo.threads,
							commentingRanges: commentInfo.commentingRanges,
							reply: commentInfo.reply,
							draftMode: commentInfo.draftMode
						};
					} else {
						return null;
					}
				}));
			}
		}

		let commentControlResult: Promise<ICommentInfo>[] = [];

		for (const owner of keys(this._commentControls)) {
			const control = this._commentControls.get(owner);
			commentControlResult.push(control.getDocumentComments(resource, CancellationToken.None));
		}

		let ret = [...await Promise.all(result), ...await Promise.all(commentControlResult)];

		return ret;
	}

	async getCommentingRanges(resource: URI): Promise<IRange[]> {
		let commentControlResult: Promise<IRange[]>[] = [];

		for (const owner of keys(this._commentControls)) {
			const control = this._commentControls.get(owner);
			commentControlResult.push(control.getCommentingRanges(resource, CancellationToken.None));
		}

		let ret = await Promise.all(commentControlResult);
		return ret.reduce((prev, curr) => { prev.push(...curr); return prev; }, []);
	}
}
