import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
export type ViewerIdentityQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ViewerIdentityQuery = {
    __typename: 'Query';
    viewer: {
        __typename: 'User';
        login: string;
        globalId: string;
    };
};
export type BotAppSlugQueryVariables = Exact<{
    globalId: string | number;
}>;
export type BotAppSlugQuery = {
    __typename: 'Query';
    node: {
        __typename: 'AddedToMergeQueueEvent';
        id: string;
    } | {
        __typename: 'AddedToProjectEvent';
        id: string;
    } | {
        __typename: 'AddedToProjectV2Event';
        id: string;
    } | {
        __typename: 'App';
        id: string;
    } | {
        __typename: 'AssignedEvent';
        id: string;
    } | {
        __typename: 'AutoMergeDisabledEvent';
        id: string;
    } | {
        __typename: 'AutoMergeEnabledEvent';
        id: string;
    } | {
        __typename: 'AutoRebaseEnabledEvent';
        id: string;
    } | {
        __typename: 'AutoSquashEnabledEvent';
        id: string;
    } | {
        __typename: 'AutomaticBaseChangeFailedEvent';
        id: string;
    } | {
        __typename: 'AutomaticBaseChangeSucceededEvent';
        id: string;
    } | {
        __typename: 'BaseRefChangedEvent';
        id: string;
    } | {
        __typename: 'BaseRefDeletedEvent';
        id: string;
    } | {
        __typename: 'BaseRefForcePushedEvent';
        id: string;
    } | {
        __typename: 'Blob';
        id: string;
    } | {
        __typename: 'BlockedByAddedEvent';
        id: string;
    } | {
        __typename: 'BlockedByRemovedEvent';
        id: string;
    } | {
        __typename: 'BlockingAddedEvent';
        id: string;
    } | {
        __typename: 'BlockingRemovedEvent';
        id: string;
    } | {
        __typename: 'Bot';
        id: string;
        appSlug: string;
    } | {
        __typename: 'BranchProtectionRule';
        id: string;
    } | {
        __typename: 'BypassForcePushAllowance';
        id: string;
    } | {
        __typename: 'BypassPullRequestAllowance';
        id: string;
    } | {
        __typename: 'CWE';
        id: string;
    } | {
        __typename: 'CheckRun';
        id: string;
    } | {
        __typename: 'CheckSuite';
        id: string;
    } | {
        __typename: 'ClosedEvent';
        id: string;
    } | {
        __typename: 'CodeOfConduct';
        id: string;
    } | {
        __typename: 'CommentDeletedEvent';
        id: string;
    } | {
        __typename: 'Commit';
        id: string;
    } | {
        __typename: 'CommitComment';
        id: string;
    } | {
        __typename: 'CommitCommentThread';
        id: string;
    } | {
        __typename: 'Comparison';
        id: string;
    } | {
        __typename: 'ConnectedEvent';
        id: string;
    } | {
        __typename: 'ConvertToDraftEvent';
        id: string;
    } | {
        __typename: 'ConvertedFromDraftEvent';
        id: string;
    } | {
        __typename: 'ConvertedNoteToIssueEvent';
        id: string;
    } | {
        __typename: 'ConvertedToDiscussionEvent';
        id: string;
    } | {
        __typename: 'CrossReferencedEvent';
        id: string;
    } | {
        __typename: 'DemilestonedEvent';
        id: string;
    } | {
        __typename: 'DependencyGraphManifest';
        id: string;
    } | {
        __typename: 'DeployKey';
        id: string;
    } | {
        __typename: 'DeployedEvent';
        id: string;
    } | {
        __typename: 'Deployment';
        id: string;
    } | {
        __typename: 'DeploymentEnvironmentChangedEvent';
        id: string;
    } | {
        __typename: 'DeploymentReview';
        id: string;
    } | {
        __typename: 'DeploymentStatus';
        id: string;
    } | {
        __typename: 'DisconnectedEvent';
        id: string;
    } | {
        __typename: 'Discussion';
        id: string;
    } | {
        __typename: 'DiscussionCategory';
        id: string;
    } | {
        __typename: 'DiscussionComment';
        id: string;
    } | {
        __typename: 'DiscussionPoll';
        id: string;
    } | {
        __typename: 'DiscussionPollOption';
        id: string;
    } | {
        __typename: 'DraftIssue';
        id: string;
    } | {
        __typename: 'Enterprise';
        id: string;
    } | {
        __typename: 'EnterpriseAdministratorInvitation';
        id: string;
    } | {
        __typename: 'EnterpriseIdentityProvider';
        id: string;
    } | {
        __typename: 'EnterpriseMemberInvitation';
        id: string;
    } | {
        __typename: 'EnterpriseRepositoryInfo';
        id: string;
    } | {
        __typename: 'EnterpriseServerInstallation';
        id: string;
    } | {
        __typename: 'EnterpriseServerUserAccount';
        id: string;
    } | {
        __typename: 'EnterpriseServerUserAccountEmail';
        id: string;
    } | {
        __typename: 'EnterpriseServerUserAccountsUpload';
        id: string;
    } | {
        __typename: 'EnterpriseUserAccount';
        id: string;
    } | {
        __typename: 'Environment';
        id: string;
    } | {
        __typename: 'ExternalIdentity';
        id: string;
    } | {
        __typename: 'Gist';
        id: string;
    } | {
        __typename: 'GistComment';
        id: string;
    } | {
        __typename: 'HeadRefDeletedEvent';
        id: string;
    } | {
        __typename: 'HeadRefForcePushedEvent';
        id: string;
    } | {
        __typename: 'HeadRefRestoredEvent';
        id: string;
    } | {
        __typename: 'IpAllowListEntry';
        id: string;
    } | {
        __typename: 'Issue';
        id: string;
    } | {
        __typename: 'IssueComment';
        id: string;
    } | {
        __typename: 'IssueCommentPinnedEvent';
        id: string;
    } | {
        __typename: 'IssueCommentUnpinnedEvent';
        id: string;
    } | {
        __typename: 'IssueFieldAddedEvent';
        id: string;
    } | {
        __typename: 'IssueFieldChangedEvent';
        id: string;
    } | {
        __typename: 'IssueFieldDate';
        id: string;
    } | {
        __typename: 'IssueFieldDateValue';
        id: string;
    } | {
        __typename: 'IssueFieldNumber';
        id: string;
    } | {
        __typename: 'IssueFieldNumberValue';
        id: string;
    } | {
        __typename: 'IssueFieldRemovedEvent';
        id: string;
    } | {
        __typename: 'IssueFieldSingleSelect';
        id: string;
    } | {
        __typename: 'IssueFieldSingleSelectOption';
        id: string;
    } | {
        __typename: 'IssueFieldSingleSelectValue';
        id: string;
    } | {
        __typename: 'IssueFieldText';
        id: string;
    } | {
        __typename: 'IssueFieldTextValue';
        id: string;
    } | {
        __typename: 'IssueType';
        id: string;
    } | {
        __typename: 'IssueTypeAddedEvent';
        id: string;
    } | {
        __typename: 'IssueTypeChangedEvent';
        id: string;
    } | {
        __typename: 'IssueTypeRemovedEvent';
        id: string;
    } | {
        __typename: 'Label';
        id: string;
    } | {
        __typename: 'LabeledEvent';
        id: string;
    } | {
        __typename: 'Language';
        id: string;
    } | {
        __typename: 'License';
        id: string;
    } | {
        __typename: 'LinkedBranch';
        id: string;
    } | {
        __typename: 'LockedEvent';
        id: string;
    } | {
        __typename: 'Mannequin';
        id: string;
    } | {
        __typename: 'MarkedAsDuplicateEvent';
        id: string;
    } | {
        __typename: 'MarketplaceCategory';
        id: string;
    } | {
        __typename: 'MarketplaceListing';
        id: string;
    } | {
        __typename: 'MemberFeatureRequestNotification';
        id: string;
    } | {
        __typename: 'MembersCanDeleteReposClearAuditEntry';
        id: string;
    } | {
        __typename: 'MembersCanDeleteReposDisableAuditEntry';
        id: string;
    } | {
        __typename: 'MembersCanDeleteReposEnableAuditEntry';
        id: string;
    } | {
        __typename: 'MentionedEvent';
        id: string;
    } | {
        __typename: 'MergeQueue';
        id: string;
    } | {
        __typename: 'MergeQueueEntry';
        id: string;
    } | {
        __typename: 'MergedEvent';
        id: string;
    } | {
        __typename: 'MigrationSource';
        id: string;
    } | {
        __typename: 'Milestone';
        id: string;
    } | {
        __typename: 'MilestonedEvent';
        id: string;
    } | {
        __typename: 'MovedColumnsInProjectEvent';
        id: string;
    } | {
        __typename: 'OIDCProvider';
        id: string;
    } | {
        __typename: 'OauthApplicationCreateAuditEntry';
        id: string;
    } | {
        __typename: 'OrgAddBillingManagerAuditEntry';
        id: string;
    } | {
        __typename: 'OrgAddMemberAuditEntry';
        id: string;
    } | {
        __typename: 'OrgBlockUserAuditEntry';
        id: string;
    } | {
        __typename: 'OrgConfigDisableCollaboratorsOnlyAuditEntry';
        id: string;
    } | {
        __typename: 'OrgConfigEnableCollaboratorsOnlyAuditEntry';
        id: string;
    } | {
        __typename: 'OrgCreateAuditEntry';
        id: string;
    } | {
        __typename: 'OrgDisableOauthAppRestrictionsAuditEntry';
        id: string;
    } | {
        __typename: 'OrgDisableSamlAuditEntry';
        id: string;
    } | {
        __typename: 'OrgDisableTwoFactorRequirementAuditEntry';
        id: string;
    } | {
        __typename: 'OrgEnableOauthAppRestrictionsAuditEntry';
        id: string;
    } | {
        __typename: 'OrgEnableSamlAuditEntry';
        id: string;
    } | {
        __typename: 'OrgEnableTwoFactorRequirementAuditEntry';
        id: string;
    } | {
        __typename: 'OrgInviteMemberAuditEntry';
        id: string;
    } | {
        __typename: 'OrgInviteToBusinessAuditEntry';
        id: string;
    } | {
        __typename: 'OrgOauthAppAccessApprovedAuditEntry';
        id: string;
    } | {
        __typename: 'OrgOauthAppAccessBlockedAuditEntry';
        id: string;
    } | {
        __typename: 'OrgOauthAppAccessDeniedAuditEntry';
        id: string;
    } | {
        __typename: 'OrgOauthAppAccessRequestedAuditEntry';
        id: string;
    } | {
        __typename: 'OrgOauthAppAccessUnblockedAuditEntry';
        id: string;
    } | {
        __typename: 'OrgRemoveBillingManagerAuditEntry';
        id: string;
    } | {
        __typename: 'OrgRemoveMemberAuditEntry';
        id: string;
    } | {
        __typename: 'OrgRemoveOutsideCollaboratorAuditEntry';
        id: string;
    } | {
        __typename: 'OrgRestoreMemberAuditEntry';
        id: string;
    } | {
        __typename: 'OrgUnblockUserAuditEntry';
        id: string;
    } | {
        __typename: 'OrgUpdateDefaultRepositoryPermissionAuditEntry';
        id: string;
    } | {
        __typename: 'OrgUpdateMemberAuditEntry';
        id: string;
    } | {
        __typename: 'OrgUpdateMemberRepositoryCreationPermissionAuditEntry';
        id: string;
    } | {
        __typename: 'OrgUpdateMemberRepositoryInvitationPermissionAuditEntry';
        id: string;
    } | {
        __typename: 'Organization';
        id: string;
    } | {
        __typename: 'OrganizationIdentityProvider';
        id: string;
    } | {
        __typename: 'OrganizationInvitation';
        id: string;
    } | {
        __typename: 'OrganizationMigration';
        id: string;
    } | {
        __typename: 'Package';
        id: string;
    } | {
        __typename: 'PackageFile';
        id: string;
    } | {
        __typename: 'PackageTag';
        id: string;
    } | {
        __typename: 'PackageVersion';
        id: string;
    } | {
        __typename: 'ParentIssueAddedEvent';
        id: string;
    } | {
        __typename: 'ParentIssueRemovedEvent';
        id: string;
    } | {
        __typename: 'PinnedDiscussion';
        id: string;
    } | {
        __typename: 'PinnedEnvironment';
        id: string;
    } | {
        __typename: 'PinnedEvent';
        id: string;
    } | {
        __typename: 'PinnedIssue';
        id: string;
    } | {
        __typename: 'PinnedIssueComment';
        id: string;
    } | {
        __typename: 'PrivateRepositoryForkingDisableAuditEntry';
        id: string;
    } | {
        __typename: 'PrivateRepositoryForkingEnableAuditEntry';
        id: string;
    } | {
        __typename: 'Project';
        id: string;
    } | {
        __typename: 'ProjectCard';
        id: string;
    } | {
        __typename: 'ProjectColumn';
        id: string;
    } | {
        __typename: 'ProjectV2';
        id: string;
    } | {
        __typename: 'ProjectV2Field';
        id: string;
    } | {
        __typename: 'ProjectV2Item';
        id: string;
    } | {
        __typename: 'ProjectV2ItemFieldDateValue';
        id: string;
    } | {
        __typename: 'ProjectV2ItemFieldIterationValue';
        id: string;
    } | {
        __typename: 'ProjectV2ItemFieldNumberValue';
        id: string;
    } | {
        __typename: 'ProjectV2ItemFieldSingleSelectValue';
        id: string;
    } | {
        __typename: 'ProjectV2ItemFieldTextValue';
        id: string;
    } | {
        __typename: 'ProjectV2ItemStatusChangedEvent';
        id: string;
    } | {
        __typename: 'ProjectV2IterationField';
        id: string;
    } | {
        __typename: 'ProjectV2SingleSelectField';
        id: string;
    } | {
        __typename: 'ProjectV2StatusUpdate';
        id: string;
    } | {
        __typename: 'ProjectV2View';
        id: string;
    } | {
        __typename: 'ProjectV2Workflow';
        id: string;
    } | {
        __typename: 'PublicKey';
        id: string;
    } | {
        __typename: 'PullRequest';
        id: string;
    } | {
        __typename: 'PullRequestCommit';
        id: string;
    } | {
        __typename: 'PullRequestCommitCommentThread';
        id: string;
    } | {
        __typename: 'PullRequestReview';
        id: string;
    } | {
        __typename: 'PullRequestReviewComment';
        id: string;
    } | {
        __typename: 'PullRequestReviewThread';
        id: string;
    } | {
        __typename: 'PullRequestThread';
        id: string;
    } | {
        __typename: 'Push';
        id: string;
    } | {
        __typename: 'PushAllowance';
        id: string;
    } | {
        __typename: 'Query';
        id: string;
    } | {
        __typename: 'Reaction';
        id: string;
    } | {
        __typename: 'ReadyForReviewEvent';
        id: string;
    } | {
        __typename: 'Ref';
        id: string;
    } | {
        __typename: 'ReferencedEvent';
        id: string;
    } | {
        __typename: 'Release';
        id: string;
    } | {
        __typename: 'ReleaseAsset';
        id: string;
    } | {
        __typename: 'RemovedFromMergeQueueEvent';
        id: string;
    } | {
        __typename: 'RemovedFromProjectEvent';
        id: string;
    } | {
        __typename: 'RemovedFromProjectV2Event';
        id: string;
    } | {
        __typename: 'RenamedTitleEvent';
        id: string;
    } | {
        __typename: 'ReopenedEvent';
        id: string;
    } | {
        __typename: 'RepoAccessAuditEntry';
        id: string;
    } | {
        __typename: 'RepoAddMemberAuditEntry';
        id: string;
    } | {
        __typename: 'RepoAddTopicAuditEntry';
        id: string;
    } | {
        __typename: 'RepoArchivedAuditEntry';
        id: string;
    } | {
        __typename: 'RepoChangeMergeSettingAuditEntry';
        id: string;
    } | {
        __typename: 'RepoConfigDisableAnonymousGitAccessAuditEntry';
        id: string;
    } | {
        __typename: 'RepoConfigDisableCollaboratorsOnlyAuditEntry';
        id: string;
    } | {
        __typename: 'RepoConfigDisableContributorsOnlyAuditEntry';
        id: string;
    } | {
        __typename: 'RepoConfigDisableSockpuppetDisallowedAuditEntry';
        id: string;
    } | {
        __typename: 'RepoConfigEnableAnonymousGitAccessAuditEntry';
        id: string;
    } | {
        __typename: 'RepoConfigEnableCollaboratorsOnlyAuditEntry';
        id: string;
    } | {
        __typename: 'RepoConfigEnableContributorsOnlyAuditEntry';
        id: string;
    } | {
        __typename: 'RepoConfigEnableSockpuppetDisallowedAuditEntry';
        id: string;
    } | {
        __typename: 'RepoConfigLockAnonymousGitAccessAuditEntry';
        id: string;
    } | {
        __typename: 'RepoConfigUnlockAnonymousGitAccessAuditEntry';
        id: string;
    } | {
        __typename: 'RepoCreateAuditEntry';
        id: string;
    } | {
        __typename: 'RepoDestroyAuditEntry';
        id: string;
    } | {
        __typename: 'RepoRemoveMemberAuditEntry';
        id: string;
    } | {
        __typename: 'RepoRemoveTopicAuditEntry';
        id: string;
    } | {
        __typename: 'Repository';
        id: string;
    } | {
        __typename: 'RepositoryCustomProperty';
        id: string;
    } | {
        __typename: 'RepositoryInvitation';
        id: string;
    } | {
        __typename: 'RepositoryMigration';
        id: string;
    } | {
        __typename: 'RepositoryRule';
        id: string;
    } | {
        __typename: 'RepositoryRuleset';
        id: string;
    } | {
        __typename: 'RepositoryRulesetBypassActor';
        id: string;
    } | {
        __typename: 'RepositoryTopic';
        id: string;
    } | {
        __typename: 'RepositoryVisibilityChangeDisableAuditEntry';
        id: string;
    } | {
        __typename: 'RepositoryVisibilityChangeEnableAuditEntry';
        id: string;
    } | {
        __typename: 'RepositoryVulnerabilityAlert';
        id: string;
    } | {
        __typename: 'ReviewDismissalAllowance';
        id: string;
    } | {
        __typename: 'ReviewDismissedEvent';
        id: string;
    } | {
        __typename: 'ReviewRequest';
        id: string;
    } | {
        __typename: 'ReviewRequestRemovedEvent';
        id: string;
    } | {
        __typename: 'ReviewRequestedEvent';
        id: string;
    } | {
        __typename: 'SavedReply';
        id: string;
    } | {
        __typename: 'SecurityAdvisory';
        id: string;
    } | {
        __typename: 'SponsorsActivity';
        id: string;
    } | {
        __typename: 'SponsorsListing';
        id: string;
    } | {
        __typename: 'SponsorsListingFeaturedItem';
        id: string;
    } | {
        __typename: 'SponsorsTier';
        id: string;
    } | {
        __typename: 'Sponsorship';
        id: string;
    } | {
        __typename: 'SponsorshipNewsletter';
        id: string;
    } | {
        __typename: 'Status';
        id: string;
    } | {
        __typename: 'StatusCheckRollup';
        id: string;
    } | {
        __typename: 'StatusContext';
        id: string;
    } | {
        __typename: 'SubIssueAddedEvent';
        id: string;
    } | {
        __typename: 'SubIssueRemovedEvent';
        id: string;
    } | {
        __typename: 'SubscribedEvent';
        id: string;
    } | {
        __typename: 'Tag';
        id: string;
    } | {
        __typename: 'Team';
        id: string;
    } | {
        __typename: 'TeamAddMemberAuditEntry';
        id: string;
    } | {
        __typename: 'TeamAddRepositoryAuditEntry';
        id: string;
    } | {
        __typename: 'TeamChangeParentTeamAuditEntry';
        id: string;
    } | {
        __typename: 'TeamRemoveMemberAuditEntry';
        id: string;
    } | {
        __typename: 'TeamRemoveRepositoryAuditEntry';
        id: string;
    } | {
        __typename: 'Topic';
        id: string;
    } | {
        __typename: 'TransferredEvent';
        id: string;
    } | {
        __typename: 'Tree';
        id: string;
    } | {
        __typename: 'UnassignedEvent';
        id: string;
    } | {
        __typename: 'UnlabeledEvent';
        id: string;
    } | {
        __typename: 'UnlockedEvent';
        id: string;
    } | {
        __typename: 'UnmarkedAsDuplicateEvent';
        id: string;
    } | {
        __typename: 'UnpinnedEvent';
        id: string;
    } | {
        __typename: 'UnsubscribedEvent';
        id: string;
    } | {
        __typename: 'User';
        id: string;
    } | {
        __typename: 'UserBlockedEvent';
        id: string;
    } | {
        __typename: 'UserContentEdit';
        id: string;
    } | {
        __typename: 'UserList';
        id: string;
    } | {
        __typename: 'UserNamespaceRepository';
        id: string;
    } | {
        __typename: 'UserStatus';
        id: string;
    } | {
        __typename: 'VerifiableDomain';
        id: string;
    } | {
        __typename: 'Workflow';
        id: string;
    } | {
        __typename: 'WorkflowRun';
        id: string;
    } | {
        __typename: 'WorkflowRunFile';
        id: string;
    } | null;
};
export declare class TypedDocumentString<TResult, TVariables> extends String implements DocumentTypeDecoration<TResult, TVariables> {
    __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
    private value;
    __meta__?: Record<string, any> | undefined;
    constructor(value: string, __meta__?: Record<string, any> | undefined);
    toString(): string & DocumentTypeDecoration<TResult, TVariables>;
}
export declare const ViewerIdentityDocument: TypedDocumentString<ViewerIdentityQuery, ViewerIdentityQueryVariables>;
export declare const BotAppSlugDocument: TypedDocumentString<BotAppSlugQuery, BotAppSlugQueryVariables>;
export {};
