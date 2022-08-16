/* tslint:disable */
/* eslint-disable */
/**
 * VRChat API Documentation
 * ![VRChat API Banner](https://vrchatapi.github.io/assets/img/api_banner_1500x400.png)  # Welcome to the VRChat API  Before we begin, we would like to state this is a **COMMUNITY DRIVEN PROJECT**. This means that everything you read on here was written by the community itself and is **not** officially supported by VRChat. The documentation is provided \"AS IS\", and any action you take towards VRChat is completely your own responsibility.  The documentation and additional libraries SHALL ONLY be used for applications interacting with VRChat\'s API in accordance with their [Terms of Service](https://hello.vrchat.com/legal) and [Community Guidelines](https://hello.vrchat.com/community-guidelines), and MUST NOT be used for modifying the client, \"avatar ripping\", or other illegal activities. Malicious usage or spamming the API may result in account termination. Certain parts of the API are also more sensitive than others, for example moderation, so please tread extra carefully and read the warnings when present.  ![Tupper Policy on API](https://i.imgur.com/yLlW7Ok.png)  Finally, use of the API using applications other than the approved methods (website, VRChat application, Unity SDK) is not officially supported. VRChat provides no guarantee or support for external applications using the API. Access to API endpoints may break **at any time, without notice**. Therefore, please **do not ping** VRChat Staff in the VRChat Discord if you are having API problems, as they do not provide API support. We will make a best effort in keeping this documentation and associated language libraries up to date, but things might be outdated or missing. If you find that something is no longer valid, please contact us on Discord or [create an issue](https://github.com/vrchatapi/specification/issues) and tell us so we can fix it.  # Getting Started  The VRChat API can be used to programmatically retrieve or update information regarding your profile, friends, avatars, worlds and more. The API consists of two parts, \"Photon\" which is only used in-game, and the \"Web API\" which is used by both the game and the website. This documentation focuses only on the Web API.  The API is designed around the REST ideology, providing semi-simple and usually predictable URIs to access and modify objects. Requests support standard HTTP methods like GET, PUT, POST, and DELETE and standard status codes. Response bodies are always UTF-8 encoded JSON objects, unless explicitly documented otherwise.  <div class=\"callout callout-error\">   <strong>🛑 Warning! Do not touch Photon!</strong><br>   Photon is only used by the in-game client and should <b>not</b> be touched. Doing so may result in permanent account termination. </div>  <div class=\"callout callout-info\">   <strong>ℹ️ API Key and Authentication</strong><br>   The API Key has always been the same and is currently <code>JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26</code>.   Read <a href=\"#tag--authentication\">Authentication</a> for how to log in. </div>  # Using the API  For simply exploring what the API can do it is strongly recommended to download [Insomnia](https://insomnia.rest/download), a free and open-source API client that\'s great for sending requests to the API in an orderly fashion. Insomnia allows you to send data in the format that\'s required for VRChat\'s API. It is also possible to try out the API in your browser, by first logging in at [vrchat.com/home](https://vrchat.com/home/) and then going to [vrchat.com/api/1/auth/user](https://vrchat.com/api/1/auth/user), but the information will be much harder to work with.  For more permanent operation such as software development it is instead recommended to use one of the existing language SDKs. This community project maintains API libraries in several languages, which allows you to interact with the API with simple function calls rather than having to implement the HTTP protocol yourself. Most of these libraries are automatically generated from the API specification, sometimes with additional helpful wrapper code to make usage easier. This allows them to be almost automatically updated and expanded upon as soon as a new feature is introduced in the specification itself. The libraries can be found on [GitHub](https://github.com/vrchatapi) or following:  * [NodeJS (JavaScript)](https://www.npmjs.com/package/vrchat) * [Dart](https://pub.dev/packages/vrchat_dart) * [Rust](https://crates.io/crates/vrchatapi) * [C#](https://github.com/vrchatapi/vrchatapi-csharp) * [Python](https://github.com/vrchatapi/vrchatapi-python)  # Pagination  Most endpoints enforce pagination, meaning they will only return 10 entries by default, and never more than 100.<br> Using both the limit and offset parameters allows you to easily paginate through a large number of objects.  | Query Parameter | Type | Description | | ----------|--|------- | | `n` | integer  | The number of objects to return. This value often defaults to 10. Highest limit is always 100.| | `offset` | integer  | A zero-based offset from the default object sorting.|  If a request returns fewer objects than the `limit` parameter, there are no more items available to return.  # Contribution  Do you want to get involved in the documentation effort? Do you want to help improve one of the language API libraries? This project is an [OPEN Open Source Project](https://openopensource.org)! This means that individuals making significant and valuable contributions are given commit-access to the project. It also means we are very open and welcoming of new people making contributions, unlike some more guarded open-source projects.  [![Discord](https://img.shields.io/static/v1?label=vrchatapi&message=discord&color=blueviolet&style=for-the-badge)](https://discord.gg/qjZE9C9fkB)
 *
 * The version of the OpenAPI document: 1.7.2
 * Contact: me@ariesclark.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface APIConfig
 */
export interface APIConfig {
    /**
     * Unknown, probably voice optimization testing
     * @type {boolean}
     * @memberof APIConfig
     */
    'VoiceEnableDegradation': boolean;
    /**
     * Unknown, probably voice optimization testing
     * @type {boolean}
     * @memberof APIConfig
     */
    'VoiceEnableReceiverLimiting': boolean;
    /**
     * VRChat\'s office address
     * @type {string}
     * @memberof APIConfig
     */
    'address': string;
    /**
     * Public Announcements
     * @type {Set<PublicAnnouncement>}
     * @memberof APIConfig
     */
    'announcements': Set<PublicAnnouncement>;
    /**
     * apiKey to be used for all other requests
     * @type {string}
     * @memberof APIConfig
     */
    'apiKey': string;
    /**
     * Game name
     * @type {string}
     * @memberof APIConfig
     * @deprecated
     */
    'appName': string;
    /**
     * Build tag of the API server
     * @type {string}
     * @memberof APIConfig
     */
    'buildVersionTag': string;
    /**
     * apiKey to be used for all other requests
     * @type {string}
     * @memberof APIConfig
     */
    'clientApiKey': string;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    'clientBPSCeiling': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    'clientDisconnectTimeout': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    'clientReservedPlayerBPS': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    'clientSentCountAllowance': number;
    /**
     * VRChat\'s contact email
     * @type {string}
     * @memberof APIConfig
     */
    'contactEmail': string;
    /**
     * VRChat\'s copyright-issues-related email
     * @type {string}
     * @memberof APIConfig
     */
    'copyrightEmail': string;
    /**
     * Current version number of the Terms of Service
     * @type {number}
     * @memberof APIConfig
     */
    'currentTOSVersion': number;
    /**
     * 
     * @type {string}
     * @memberof APIConfig
     */
    'defaultAvatar': string;
    /**
     * 
     * @type {DeploymentGroup}
     * @memberof APIConfig
     */
    'deploymentGroup': DeploymentGroup;
    /**
     * Version number for game development build
     * @type {string}
     * @memberof APIConfig
     * @deprecated
     */
    'devAppVersionStandalone': string;
    /**
     * Developer Download link
     * @type {string}
     * @memberof APIConfig
     * @deprecated
     */
    'devDownloadLinkWindows': string;
    /**
     * Link to download the development SDK, use downloadUrls instead
     * @type {string}
     * @memberof APIConfig
     * @deprecated
     */
    'devSdkUrl': string;
    /**
     * Version of the development SDK
     * @type {string}
     * @memberof APIConfig
     * @deprecated
     */
    'devSdkVersion': string;
    /**
     * Version number for server development build
     * @type {string}
     * @memberof APIConfig
     * @deprecated
     */
    'devServerVersionStandalone': string;
    /**
     * Unknown, \"dis\" maybe for disconnect?
     * @type {string}
     * @memberof APIConfig
     */
    'dis-countdown': string;
    /**
     * Toggles if copying avatars should be disabled
     * @type {boolean}
     * @memberof APIConfig
     */
    'disableAvatarCopying': boolean;
    /**
     * Toggles if avatar gating should be disabled. Avatar gating restricts uploading of avatars to people with the `system_avatar_access` Tag or `admin_avatar_access` Tag
     * @type {boolean}
     * @memberof APIConfig
     */
    'disableAvatarGating': boolean;
    /**
     * Toggles if the Community Labs should be disabled
     * @type {boolean}
     * @memberof APIConfig
     */
    'disableCommunityLabs': boolean;
    /**
     * Toggles if promotion out of Community Labs should be disabled
     * @type {boolean}
     * @memberof APIConfig
     */
    'disableCommunityLabsPromotion': boolean;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    'disableEmail': boolean;
    /**
     * Toggles if Analytics should be disabled.
     * @type {boolean}
     * @memberof APIConfig
     */
    'disableEventStream': boolean;
    /**
     * Toggles if feedback gating should be disabled. Feedback gating restricts submission of feedback (reporting a World or User) to people with the `system_feedback_access` Tag.
     * @type {boolean}
     * @memberof APIConfig
     */
    'disableFeedbackGating': boolean;
    /**
     * Unknown, probably toggles compilation of frontend web builds? So internal flag?
     * @type {boolean}
     * @memberof APIConfig
     */
    'disableFrontendBuilds': boolean;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    'disableHello': boolean;
    /**
     * Toggles if signing up for Subscriptions in Oculus is disabled or not.
     * @type {boolean}
     * @memberof APIConfig
     */
    'disableOculusSubs': boolean;
    /**
     * Toggles if new user account registration should be disabled.
     * @type {boolean}
     * @memberof APIConfig
     */
    'disableRegistration': boolean;
    /**
     * Toggles if Steam Networking should be disabled. VRChat these days uses Photon Unity Networking (PUN) instead.
     * @type {boolean}
     * @memberof APIConfig
     */
    'disableSteamNetworking': boolean;
    /**
     * Toggles if 2FA should be disabled.
     * @type {boolean}
     * @memberof APIConfig
     * @deprecated
     */
    'disableTwoFactorAuth': boolean;
    /**
     * Toggles if Udon should be universally disabled in-game.
     * @type {boolean}
     * @memberof APIConfig
     */
    'disableUdon': boolean;
    /**
     * Toggles if account upgrading \"linking with Steam/Oculus\" should be disabled.
     * @type {boolean}
     * @memberof APIConfig
     */
    'disableUpgradeAccount': boolean;
    /**
     * Download link for game on the Oculus Rift website.
     * @type {string}
     * @memberof APIConfig
     */
    'downloadLinkWindows': string;
    /**
     * 
     * @type {DownloadURLList}
     * @memberof APIConfig
     */
    'downloadUrls': DownloadURLList;
    /**
     * Array of DynamicWorldRow objects, used by the game to display the list of world rows
     * @type {Set<DynamicContentRow>}
     * @memberof APIConfig
     */
    'dynamicWorldRows': Set<DynamicContentRow>;
    /**
     * 
     * @type {APIEventConfig}
     * @memberof APIConfig
     */
    'events': APIEventConfig;
    /**
     * Unknown
     * @type {string}
     * @memberof APIConfig
     * @deprecated
     */
    'gearDemoRoomId': string;
    /**
     * WorldID be \"offline\" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof APIConfig
     */
    'homeWorldId': string;
    /**
     * Redirect target if you try to open the base API domain in your browser
     * @type {string}
     * @memberof APIConfig
     */
    'homepageRedirectTarget': string;
    /**
     * WorldID be \"offline\" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof APIConfig
     */
    'hubWorldId': string;
    /**
     * VRChat\'s job application email
     * @type {string}
     * @memberof APIConfig
     */
    'jobsEmail': string;
    /**
     * MOTD
     * @type {string}
     * @memberof APIConfig
     * @deprecated
     */
    'messageOfTheDay': string;
    /**
     * VRChat\'s moderation related email
     * @type {string}
     * @memberof APIConfig
     */
    'moderationEmail': string;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    'moderationQueryPeriod': number;
    /**
     * Used in-game to notify a user they aren\'t allowed to select avatars in private worlds
     * @type {string}
     * @memberof APIConfig
     */
    'notAllowedToSelectAvatarInPrivateWorldMessage': string;
    /**
     * Extra [plugin](https://doc.photonengine.com/en-us/server/current/plugins/manual) to run in each instance
     * @type {string}
     * @memberof APIConfig
     */
    'plugin': string;
    /**
     * Version number for game release build
     * @type {string}
     * @memberof APIConfig
     * @deprecated
     */
    'releaseAppVersionStandalone': string;
    /**
     * Link to download the release SDK
     * @type {string}
     * @memberof APIConfig
     * @deprecated
     */
    'releaseSdkUrl': string;
    /**
     * Version of the release SDK
     * @type {string}
     * @memberof APIConfig
     * @deprecated
     */
    'releaseSdkVersion': string;
    /**
     * Version number for server release build
     * @type {string}
     * @memberof APIConfig
     * @deprecated
     */
    'releaseServerVersionStandalone': string;
    /**
     * Link to the developer FAQ
     * @type {string}
     * @memberof APIConfig
     */
    'sdkDeveloperFaqUrl': string;
    /**
     * Link to the official VRChat Discord
     * @type {string}
     * @memberof APIConfig
     */
    'sdkDiscordUrl': string;
    /**
     * Used in the SDK to notify a user they aren\'t allowed to upload avatars/worlds yet
     * @type {string}
     * @memberof APIConfig
     */
    'sdkNotAllowedToPublishMessage': string;
    /**
     * Unity version supported by the SDK
     * @type {string}
     * @memberof APIConfig
     */
    'sdkUnityVersion': string;
    /**
     * Server name of the API server currently responding
     * @type {string}
     * @memberof APIConfig
     */
    'serverName': string;
    /**
     * VRChat\'s support email
     * @type {string}
     * @memberof APIConfig
     */
    'supportEmail': string;
    /**
     * WorldID be \"offline\" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof APIConfig
     */
    'timeOutWorldId': string;
    /**
     * WorldID be \"offline\" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof APIConfig
     */
    'tutorialWorldId': string;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    'updateRateMsMaximum': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    'updateRateMsMinimum': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    'updateRateMsNormal': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    'updateRateMsUdonManual': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    'uploadAnalysisPercent': number;
    /**
     * List of allowed URLs that bypass the \"Allow untrusted URL\'s\" setting in-game
     * @type {Array<string>}
     * @memberof APIConfig
     */
    'urlList': Array<string>;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    'useReliableUdpForVoice': boolean;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    'userUpdatePeriod': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    'userVerificationDelay': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    'userVerificationRetry': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    'userVerificationTimeout': number;
    /**
     * Download link for game on the Steam website.
     * @type {string}
     * @memberof APIConfig
     */
    'viveWindowsUrl': string;
    /**
     * List of allowed URLs that are allowed to host avatar assets
     * @type {Array<string>}
     * @memberof APIConfig
     */
    'whiteListedAssetUrls': Array<string>;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    'worldUpdatePeriod': number;
    /**
     * Currently used youtube-dl.exe hash in SHA-256-delimited format
     * @type {string}
     * @memberof APIConfig
     */
    'youtubedl-hash': string;
    /**
     * Currently used youtube-dl.exe version
     * @type {string}
     * @memberof APIConfig
     */
    'youtubedl-version': string;
}
/**
 * 
 * @export
 * @interface APIEventConfig
 */
export interface APIEventConfig {
    /**
     * Unknown
     * @type {number}
     * @memberof APIEventConfig
     */
    'distanceClose': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIEventConfig
     */
    'distanceFactor': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIEventConfig
     */
    'distanceFar': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIEventConfig
     */
    'groupDistance': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIEventConfig
     */
    'maximumBunchSize': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIEventConfig
     */
    'notVisibleFactor': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIEventConfig
     */
    'playerOrderBucketSize': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIEventConfig
     */
    'playerOrderFactor': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIEventConfig
     */
    'slowUpdateFactorThreshold': number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIEventConfig
     */
    'viewSegmentLength': number;
}
/**
 * 
 * @export
 * @interface APIHealth
 */
export interface APIHealth {
    /**
     * 
     * @type {boolean}
     * @memberof APIHealth
     */
    'ok': boolean;
    /**
     * 
     * @type {string}
     * @memberof APIHealth
     */
    'serverName': string;
    /**
     * 
     * @type {string}
     * @memberof APIHealth
     */
    'buildVersionTag': string;
}
/**
 * 
 * @export
 * @interface AddFavoriteRequest
 */
export interface AddFavoriteRequest {
    /**
     * 
     * @type {FavoriteType}
     * @memberof AddFavoriteRequest
     */
    'type': FavoriteType;
    /**
     * Must be either AvatarID, WorldID or UserID.
     * @type {string}
     * @memberof AddFavoriteRequest
     */
    'favoriteId': string;
    /**
     * Tags indicate which group this favorite belongs to. Adding multiple groups makes it show up in all. Removing it from one in that case removes it from all.
     * @type {Array<string>}
     * @memberof AddFavoriteRequest
     */
    'tags': Array<string>;
}
/**
 * 
 * @export
 * @interface Avatar
 */
export interface Avatar {
    /**
     * Not present from general serach `/avatars`, only on specific requests `/avatars/{avatarId}`.
     * @type {string}
     * @memberof Avatar
     */
    'assetUrl'?: string;
    /**
     * Not present from general serach `/avatars`, only on specific requests `/avatars/{avatarId}`. **Deprecation:** `Object` has unknown usage/fields, and is always empty. Use normal `Url` field instead.
     * @type {object}
     * @memberof Avatar
     */
    'assetUrlObject'?: object;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof Avatar
     */
    'authorId': string;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    'authorName': string;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    'description': string;
    /**
     * 
     * @type {boolean}
     * @memberof Avatar
     */
    'featured': boolean;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    'imageUrl': string;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    'name': string;
    /**
     * 
     * @type {ReleaseStatus}
     * @memberof Avatar
     */
    'releaseStatus': ReleaseStatus;
    /**
     *  
     * @type {Array<string>}
     * @memberof Avatar
     */
    'tags': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    'thumbnailImageUrl': string;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    'unityPackageUrl': string;
    /**
     * 
     * @type {AvatarUnityPackageUrlObject}
     * @memberof Avatar
     * @deprecated
     */
    'unityPackageUrlObject': AvatarUnityPackageUrlObject;
    /**
     * 
     * @type {Set<UnityPackage>}
     * @memberof Avatar
     */
    'unityPackages': Set<UnityPackage>;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    'updated_at': string;
    /**
     * 
     * @type {number}
     * @memberof Avatar
     */
    'version': number;
}
/**
 * **Deprecation:** `Object` has unknown usage/fields, and is always empty. Use normal `Url` field instead.
 * @export
 * @interface AvatarUnityPackageUrlObject
 */
export interface AvatarUnityPackageUrlObject {
    /**
     * 
     * @type {string}
     * @memberof AvatarUnityPackageUrlObject
     */
    'unityPackageUrl'?: string;
}
/**
 * 
 * @export
 * @interface CreateAvatarRequest
 */
export interface CreateAvatarRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateAvatarRequest
     */
    'assetUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAvatarRequest
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAvatarRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof CreateAvatarRequest
     */
    'description'?: string;
    /**
     *  
     * @type {Array<string>}
     * @memberof CreateAvatarRequest
     */
    'tags'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreateAvatarRequest
     */
    'imageUrl': string;
    /**
     * 
     * @type {ReleaseStatus}
     * @memberof CreateAvatarRequest
     */
    'releaseStatus'?: ReleaseStatus;
    /**
     * 
     * @type {number}
     * @memberof CreateAvatarRequest
     */
    'version'?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateAvatarRequest
     */
    'unityPackageUrl'?: string;
}
/**
 * 
 * @export
 * @interface CreateFileRequest
 */
export interface CreateFileRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateFileRequest
     */
    'name': string;
    /**
     * 
     * @type {MIMEType}
     * @memberof CreateFileRequest
     */
    'mimeType': MIMEType;
    /**
     * 
     * @type {string}
     * @memberof CreateFileRequest
     */
    'extension': string;
    /**
     *  
     * @type {Array<string>}
     * @memberof CreateFileRequest
     */
    'tags'?: Array<string>;
}
/**
 * 
 * @export
 * @interface CreateFileVersionRequest
 */
export interface CreateFileVersionRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateFileVersionRequest
     */
    'signatureMd5': string;
    /**
     * 
     * @type {number}
     * @memberof CreateFileVersionRequest
     */
    'signatureSizeInBytes': number;
    /**
     * 
     * @type {string}
     * @memberof CreateFileVersionRequest
     */
    'fileMd5'?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateFileVersionRequest
     */
    'fileSizeInBytes'?: number;
}
/**
 * 
 * @export
 * @interface CreateWorldRequest
 */
export interface CreateWorldRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateWorldRequest
     */
    'assetUrl': string;
    /**
     * 
     * @type {number}
     * @memberof CreateWorldRequest
     */
    'assetVersion'?: number;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof CreateWorldRequest
     */
    'authorId'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateWorldRequest
     */
    'authorName'?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateWorldRequest
     */
    'capacity'?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateWorldRequest
     */
    'description'?: string;
    /**
     * WorldID be \"offline\" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof CreateWorldRequest
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateWorldRequest
     */
    'imageUrl': string;
    /**
     * 
     * @type {string}
     * @memberof CreateWorldRequest
     */
    'name': string;
    /**
     * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
     * @type {string}
     * @memberof CreateWorldRequest
     */
    'platform'?: string;
    /**
     * 
     * @type {ReleaseStatus}
     * @memberof CreateWorldRequest
     */
    'releaseStatus'?: ReleaseStatus;
    /**
     *  
     * @type {Array<string>}
     * @memberof CreateWorldRequest
     */
    'tags'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreateWorldRequest
     */
    'unityPackageUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateWorldRequest
     */
    'unityVersion'?: string;
}
/**
 * 
 * @export
 * @interface CurrentUser
 */
export interface CurrentUser {
    /**
     * 
     * @type {number}
     * @memberof CurrentUser
     */
    'acceptedTOSVersion': number;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'accountDeletionDate'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    'activeFriends'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    'allowAvatarCopying': boolean;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'bio': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    'bioLinks': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'currentAvatar': string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'currentAvatarAssetUrl': string;
    /**
     * When profilePicOverride is not empty, use it instead.
     * @type {string}
     * @memberof CurrentUser
     */
    'currentAvatarImageUrl': string;
    /**
     * When profilePicOverride is not empty, use it instead.
     * @type {string}
     * @memberof CurrentUser
     */
    'currentAvatarThumbnailImageUrl': string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'date_joined': string;
    /**
     * 
     * @type {DeveloperType}
     * @memberof CurrentUser
     */
    'developerType': DeveloperType;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'displayName': string;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    'emailVerified': boolean;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'fallbackAvatar'?: string;
    /**
     * Always empty array.
     * @type {Array<string>}
     * @memberof CurrentUser
     * @deprecated
     */
    'friendGroupNames': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'friendKey': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    'friends': Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    'hasBirthday': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    'hasEmail': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    'hasLoggedInFromClient': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    'hasPendingEmail': boolean;
    /**
     * WorldID be \"offline\" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof CurrentUser
     */
    'homeLocation': string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof CurrentUser
     */
    'id': string;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    'isFriend': boolean;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'last_login': string;
    /**
     * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
     * @type {string}
     * @memberof CurrentUser
     */
    'last_platform': string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'obfuscatedEmail': string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'obfuscatedPendingEmail': string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'oculusId': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    'offlineFriends'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    'onlineFriends'?: Array<string>;
    /**
     *  
     * @type {Array<PastDisplayName>}
     * @memberof CurrentUser
     */
    'pastDisplayNames': Array<PastDisplayName>;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'profilePicOverride': string;
    /**
     * 
     * @type {UserState}
     * @memberof CurrentUser
     */
    'state': UserState;
    /**
     * 
     * @type {UserStatus}
     * @memberof CurrentUser
     */
    'status': UserStatus;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'statusDescription': string;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    'statusFirstTime': boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    'statusHistory': Array<string>;
    /**
     * 
     * @type {object}
     * @memberof CurrentUser
     */
    'steamDetails': object;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'steamId': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    'tags': Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    'twoFactorAuthEnabled': boolean;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'twoFactorAuthEnabledDate'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUser
     */
    'unsubscribe': boolean;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'userIcon': string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    'username': string;
}
/**
 * Used to identify which API deployment cluster is currently responding.  `blue` and `green` are used by Production. `grape`and `cherry` are used during Development.  [Blue Green Deployment by Martin Fowler](https://martinfowler.com/bliki/BlueGreenDeployment.html)
 * @export
 * @enum {string}
 */

export const DeploymentGroup = {
    Blue: 'blue',
    Green: 'green',
    Grape: 'grape',
    Cherry: 'cherry'
} as const;

export type DeploymentGroup = typeof DeploymentGroup[keyof typeof DeploymentGroup];


/**
 * \"none\" User is a normal user \"trusted\" Unknown \"internal\" Is a VRChat Developer \"moderator\" Is a VRChat Moderator  Staff can hide their developerType at will.
 * @export
 * @enum {string}
 */

export const DeveloperType = {
    None: 'none',
    Trusted: 'trusted',
    Internal: 'internal',
    Moderator: 'moderator'
} as const;

export type DeveloperType = typeof DeveloperType[keyof typeof DeveloperType];


/**
 * Download links for various development assets.
 * @export
 * @interface DownloadURLList
 */
export interface DownloadURLList {
    /**
     * Download link for legacy SDK2
     * @type {string}
     * @memberof DownloadURLList
     * @deprecated
     */
    'sdk2': string;
    /**
     * Download link for SDK3 for Avatars
     * @type {string}
     * @memberof DownloadURLList
     */
    'sdk3-avatars': string;
    /**
     * Download link for SDK3 for Worlds
     * @type {string}
     * @memberof DownloadURLList
     */
    'sdk3-worlds': string;
}
/**
 * 
 * @export
 * @interface DynamicContentRow
 */
export interface DynamicContentRow {
    /**
     * 
     * @type {number}
     * @memberof DynamicContentRow
     */
    'index'?: number;
    /**
     * 
     * @type {string}
     * @memberof DynamicContentRow
     */
    'name': string;
    /**
     * Usually \"ThisPlatformSupported\", but can also be other values such as \"all\" or platform specific identifiers.
     * @type {string}
     * @memberof DynamicContentRow
     */
    'platform': string;
    /**
     * 
     * @type {string}
     * @memberof DynamicContentRow
     */
    'sortHeading': string;
    /**
     * 
     * @type {string}
     * @memberof DynamicContentRow
     */
    'sortOrder': string;
    /**
     * 
     * @type {string}
     * @memberof DynamicContentRow
     */
    'sortOwnership': string;
    /**
     * Tag to filter content for this row.
     * @type {string}
     * @memberof DynamicContentRow
     */
    'tag'?: string;
    /**
     * Type is not present if it is a world.
     * @type {string}
     * @memberof DynamicContentRow
     */
    'type'?: string;
}
/**
 * 
 * @export
 * @interface Favorite
 */
export interface Favorite {
    /**
     * MUST be either AvatarID, UserID or WorldID.
     * @type {string}
     * @memberof Favorite
     */
    'favoriteId': string;
    /**
     * 
     * @type {string}
     * @memberof Favorite
     */
    'id': string;
    /**
     *  
     * @type {Array<string>}
     * @memberof Favorite
     */
    'tags': Array<string>;
    /**
     * 
     * @type {FavoriteType}
     * @memberof Favorite
     */
    'type': FavoriteType;
}
/**
 * 
 * @export
 * @interface FavoriteGroup
 */
export interface FavoriteGroup {
    /**
     * 
     * @type {string}
     * @memberof FavoriteGroup
     */
    'displayName': string;
    /**
     * 
     * @type {string}
     * @memberof FavoriteGroup
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof FavoriteGroup
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof FavoriteGroup
     */
    'ownerDisplayName': string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof FavoriteGroup
     */
    'ownerId': string;
    /**
     *  
     * @type {Array<string>}
     * @memberof FavoriteGroup
     */
    'tags': Array<string>;
    /**
     * 
     * @type {FavoriteType}
     * @memberof FavoriteGroup
     */
    'type': FavoriteType;
    /**
     * 
     * @type {FavoriteGroupVisibility}
     * @memberof FavoriteGroup
     */
    'visibility': FavoriteGroupVisibility;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const FavoriteGroupVisibility = {
    Private: 'private',
    Friends: 'friends',
    Public: 'public'
} as const;

export type FavoriteGroupVisibility = typeof FavoriteGroupVisibility[keyof typeof FavoriteGroupVisibility];


/**
 * 
 * @export
 * @enum {string}
 */

export const FavoriteType = {
    World: 'world',
    Friend: 'friend',
    Avatar: 'avatar'
} as const;

export type FavoriteType = typeof FavoriteType[keyof typeof FavoriteType];


/**
 * 
 * @export
 * @interface FileData
 */
export interface FileData {
    /**
     * 
     * @type {string}
     * @memberof FileData
     */
    'category': FileDataCategoryEnum;
    /**
     * 
     * @type {string}
     * @memberof FileData
     */
    'fileName': string;
    /**
     * 
     * @type {string}
     * @memberof FileData
     */
    'md5': string;
    /**
     * 
     * @type {number}
     * @memberof FileData
     */
    'sizeInBytes': number;
    /**
     * 
     * @type {FileStatus}
     * @memberof FileData
     */
    'status': FileStatus;
    /**
     * 
     * @type {string}
     * @memberof FileData
     */
    'uploadId': string;
    /**
     * 
     * @type {string}
     * @memberof FileData
     */
    'url': string;
}

export const FileDataCategoryEnum = {
    Multipart: 'multipart',
    Queued: 'queued',
    Simple: 'simple'
} as const;

export type FileDataCategoryEnum = typeof FileDataCategoryEnum[keyof typeof FileDataCategoryEnum];

/**
 * 
 * @export
 * @enum {string}
 */

export const FileStatus = {
    Waiting: 'waiting',
    Complete: 'complete',
    None: 'none',
    Queued: 'queued'
} as const;

export type FileStatus = typeof FileStatus[keyof typeof FileStatus];


/**
 * 
 * @export
 * @interface FileUploadURL
 */
export interface FileUploadURL {
    /**
     * 
     * @type {string}
     * @memberof FileUploadURL
     */
    'url': string;
}
/**
 * 
 * @export
 * @interface FileVersion
 */
export interface FileVersion {
    /**
     * 
     * @type {string}
     * @memberof FileVersion
     */
    'created_at': string;
    /**
     * Usually only present if `true`
     * @type {boolean}
     * @memberof FileVersion
     */
    'deleted'?: boolean;
    /**
     * 
     * @type {FileData}
     * @memberof FileVersion
     */
    'delta'?: FileData;
    /**
     * 
     * @type {FileData}
     * @memberof FileVersion
     */
    'file'?: FileData;
    /**
     * 
     * @type {FileData}
     * @memberof FileVersion
     */
    'signature'?: FileData;
    /**
     * 
     * @type {FileStatus}
     * @memberof FileVersion
     */
    'status': FileStatus;
    /**
     * Incremental version counter, can only be increased.
     * @type {number}
     * @memberof FileVersion
     */
    'version': number;
}
/**
 * 
 * @export
 * @interface FileVersionUploadStatus
 */
export interface FileVersionUploadStatus {
    /**
     * 
     * @type {string}
     * @memberof FileVersionUploadStatus
     */
    'uploadId': string;
    /**
     * 
     * @type {string}
     * @memberof FileVersionUploadStatus
     */
    'fileName': string;
    /**
     * 
     * @type {number}
     * @memberof FileVersionUploadStatus
     */
    'nextPartNumber': number;
    /**
     * 
     * @type {number}
     * @memberof FileVersionUploadStatus
     */
    'maxParts': number;
    /**
     * 
     * @type {Array<object>}
     * @memberof FileVersionUploadStatus
     */
    'parts': Array<object>;
    /**
     * Unknown
     * @type {Array<object>}
     * @memberof FileVersionUploadStatus
     */
    'etags': Array<object>;
}
/**
 * 
 * @export
 * @interface FinishFileDataUploadRequest
 */
export interface FinishFileDataUploadRequest {
    /**
     * Array of ETags uploaded.
     * @type {Set<string>}
     * @memberof FinishFileDataUploadRequest
     */
    'etags'?: Set<string>;
    /**
     * Always a zero in string form, despite how many parts uploaded.
     * @type {string}
     * @memberof FinishFileDataUploadRequest
     * @deprecated
     */
    'nextPartNumber': string;
    /**
     * Always a zero in string form, despite how many parts uploaded.
     * @type {string}
     * @memberof FinishFileDataUploadRequest
     * @deprecated
     */
    'maxParts': string;
}
/**
 * 
 * @export
 * @interface FriendStatus
 */
export interface FriendStatus {
    /**
     * 
     * @type {boolean}
     * @memberof FriendStatus
     */
    'incomingRequest': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FriendStatus
     */
    'isFriend': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FriendStatus
     */
    'outgoingRequest': boolean;
}
/**
 * 
 * @export
 * @interface InfoPush
 */
export interface InfoPush {
    /**
     * 
     * @type {string}
     * @memberof InfoPush
     */
    'id': string;
    /**
     * 
     * @type {boolean}
     * @memberof InfoPush
     */
    'isEnabled': boolean;
    /**
     * 
     * @type {ReleaseStatus}
     * @memberof InfoPush
     */
    'releaseStatus': ReleaseStatus;
    /**
     * 
     * @type {number}
     * @memberof InfoPush
     */
    'priority': number;
    /**
     *  
     * @type {Array<string>}
     * @memberof InfoPush
     */
    'tags': Array<string>;
    /**
     * 
     * @type {InfoPushData}
     * @memberof InfoPush
     */
    'data': InfoPushData;
    /**
     * Unknown usage, MD5
     * @type {string}
     * @memberof InfoPush
     */
    'hash': string;
    /**
     * 
     * @type {string}
     * @memberof InfoPush
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof InfoPush
     */
    'updatedAt': string;
    /**
     * 
     * @type {string}
     * @memberof InfoPush
     */
    'startDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof InfoPush
     */
    'endDate'?: string;
}
/**
 * 
 * @export
 * @interface InfoPushData
 */
export interface InfoPushData {
    /**
     * 
     * @type {DynamicContentRow}
     * @memberof InfoPushData
     */
    'contentList'?: DynamicContentRow;
    /**
     * 
     * @type {string}
     * @memberof InfoPushData
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof InfoPushData
     */
    'imageUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof InfoPushData
     */
    'name'?: string;
    /**
     * 
     * @type {InfoPushDataClickable}
     * @memberof InfoPushData
     */
    'onPressed'?: InfoPushDataClickable;
    /**
     * 
     * @type {string}
     * @memberof InfoPushData
     */
    'template'?: string;
    /**
     * 
     * @type {string}
     * @memberof InfoPushData
     */
    'version'?: string;
    /**
     * 
     * @type {InfoPushDataArticle}
     * @memberof InfoPushData
     */
    'article'?: InfoPushDataArticle;
}
/**
 * 
 * @export
 * @interface InfoPushDataArticle
 */
export interface InfoPushDataArticle {
    /**
     * 
     * @type {InfoPushDataArticleContent}
     * @memberof InfoPushDataArticle
     */
    'content'?: InfoPushDataArticleContent;
}
/**
 * 
 * @export
 * @interface InfoPushDataArticleContent
 */
export interface InfoPushDataArticleContent {
    /**
     * 
     * @type {string}
     * @memberof InfoPushDataArticleContent
     */
    'text'?: string;
    /**
     * 
     * @type {string}
     * @memberof InfoPushDataArticleContent
     */
    'imageUrl'?: string;
    /**
     * 
     * @type {InfoPushDataClickable}
     * @memberof InfoPushDataArticleContent
     */
    'onPressed'?: InfoPushDataClickable;
}
/**
 * 
 * @export
 * @interface InfoPushDataClickable
 */
export interface InfoPushDataClickable {
    /**
     * 
     * @type {string}
     * @memberof InfoPushDataClickable
     */
    'command': InfoPushDataClickableCommandEnum;
    /**
     * In case of OpenURL, this would contain the link.
     * @type {Array<string>}
     * @memberof InfoPushDataClickable
     */
    'parameters'?: Array<string>;
}

export const InfoPushDataClickableCommandEnum = {
    OpenUrl: 'OpenURL',
    OpenVrcPlusMenu: 'OpenVRCPlusMenu',
    OpenSafetyMenu: 'OpenSafetyMenu',
    CannedWorldSearch: 'CannedWorldSearch'
} as const;

export type InfoPushDataClickableCommandEnum = typeof InfoPushDataClickableCommandEnum[keyof typeof InfoPushDataClickableCommandEnum];

/**
 * * `hidden` field is only present if InstanceType is `hidden` aka \"Friends+\", and is instance creator. * `friends` field is only present if InstanceType is `friends` aka \"Friends\", and is instance creator. * `private` field is only present if InstanceType is `private` aka \"Invite\" or \"Invite+\", and is instance creator.
 * @export
 * @interface Instance
 */
export interface Instance {
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    'active': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    'canRequestInvite': boolean;
    /**
     * 
     * @type {number}
     * @memberof Instance
     */
    'capacity': number;
    /**
     * Always returns \"unknown\".
     * @type {string}
     * @memberof Instance
     * @deprecated
     */
    'clientNumber': string;
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    'full': boolean;
    /**
     * InstanceID can be \"offline\" on User profiles if you are not friends with that user and \"private\" if you are friends and user is in private instance.
     * @type {string}
     * @memberof Instance
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    'instanceId': string;
    /**
     * InstanceID can be \"offline\" on User profiles if you are not friends with that user and \"private\" if you are friends and user is in private instance.
     * @type {string}
     * @memberof Instance
     */
    'location': string;
    /**
     * 
     * @type {number}
     * @memberof Instance
     */
    'n_users': number;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    'name': string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof Instance
     */
    'ownerId'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    'permanent': boolean;
    /**
     * 
     * @type {Region}
     * @memberof Instance
     */
    'photonRegion': Region;
    /**
     * 
     * @type {InstancePlatforms}
     * @memberof Instance
     */
    'platforms': InstancePlatforms;
    /**
     * 
     * @type {Region}
     * @memberof Instance
     */
    'region': Region;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    'shortName': string;
    /**
     * The tags array on Instances usually contain the language tags of the people in the instance. 
     * @type {Array<string>}
     * @memberof Instance
     */
    'tags': Array<string>;
    /**
     * 
     * @type {InstanceType}
     * @memberof Instance
     */
    'type': InstanceType;
    /**
     * WorldID be \"offline\" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof Instance
     */
    'worldId': string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof Instance
     */
    'hidden'?: string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof Instance
     */
    'friends'?: string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof Instance
     */
    'private'?: string;
}
/**
 * 
 * @export
 * @interface InstancePlatforms
 */
export interface InstancePlatforms {
    /**
     * 
     * @type {number}
     * @memberof InstancePlatforms
     */
    'android': number;
    /**
     * 
     * @type {number}
     * @memberof InstancePlatforms
     */
    'standalonewindows': number;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const InstanceType = {
    Public: 'public',
    Hidden: 'hidden',
    Friends: 'friends',
    Private: 'private'
} as const;

export type InstanceType = typeof InstanceType[keyof typeof InstanceType];


/**
 * 
 * @export
 * @interface InviteMessage
 */
export interface InviteMessage {
    /**
     * 
     * @type {boolean}
     * @memberof InviteMessage
     */
    'canBeUpdated': boolean;
    /**
     * 
     * @type {string}
     * @memberof InviteMessage
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof InviteMessage
     */
    'message': string;
    /**
     * 
     * @type {InviteMessageType}
     * @memberof InviteMessage
     */
    'messageType': InviteMessageType;
    /**
     * Changes to 60 when updated, although probably server-side configurable.
     * @type {number}
     * @memberof InviteMessage
     */
    'remainingCooldownMinutes': number;
    /**
     * 
     * @type {number}
     * @memberof InviteMessage
     */
    'slot': number;
    /**
     * 
     * @type {string}
     * @memberof InviteMessage
     */
    'updatedAt': string;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const InviteMessageType = {
    Message: 'message',
    Response: 'response',
    Request: 'request',
    RequestResponse: 'requestResponse'
} as const;

export type InviteMessageType = typeof InviteMessageType[keyof typeof InviteMessageType];


/**
 * 
 * @export
 * @interface InviteRequest
 */
export interface InviteRequest {
    /**
     * InstanceID can be \"offline\" on User profiles if you are not friends with that user and \"private\" if you are friends and user is in private instance.
     * @type {string}
     * @memberof InviteRequest
     */
    'instanceId': string;
    /**
     * 
     * @type {number}
     * @memberof InviteRequest
     */
    'messageSlot'?: number;
}
/**
 * 
 * @export
 * @interface InviteResponse
 */
export interface InviteResponse {
    /**
     * 
     * @type {number}
     * @memberof InviteResponse
     */
    'responseSlot': number;
}
/**
 * 
 * @export
 * @interface License
 */
export interface License {
    /**
     * Either a AvatarID, LicenseGroupID, PermissionID or ProductID. This depends on the `forType` field.
     * @type {string}
     * @memberof License
     */
    'forId': string;
    /**
     * 
     * @type {LicenseType}
     * @memberof License
     */
    'forType': LicenseType;
    /**
     * 
     * @type {string}
     * @memberof License
     */
    'forName': string;
    /**
     * 
     * @type {LicenseAction}
     * @memberof License
     */
    'forAction': LicenseAction;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const LicenseAction = {
    Wear: 'wear',
    Have: 'have'
} as const;

export type LicenseAction = typeof LicenseAction[keyof typeof LicenseAction];


/**
 * 
 * @export
 * @interface LicenseGroup
 */
export interface LicenseGroup {
    /**
     * 
     * @type {string}
     * @memberof LicenseGroup
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof LicenseGroup
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof LicenseGroup
     */
    'description': string;
    /**
     * 
     * @type {Array<License>}
     * @memberof LicenseGroup
     */
    'licenses': Array<License>;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const LicenseType = {
    Avatar: 'avatar',
    LicenseGroup: 'licenseGroup',
    Permission: 'permission',
    Product: 'product'
} as const;

export type LicenseType = typeof LicenseType[keyof typeof LicenseType];


/**
 * 
 * @export
 * @interface LimitedUnityPackage
 */
export interface LimitedUnityPackage {
    /**
     * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
     * @type {string}
     * @memberof LimitedUnityPackage
     */
    'platform': string;
    /**
     * 
     * @type {string}
     * @memberof LimitedUnityPackage
     */
    'unityVersion': string;
}
/**
 * 
 * @export
 * @interface LimitedUser
 */
export interface LimitedUser {
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    'bio'?: string;
    /**
     * When profilePicOverride is not empty, use it instead.
     * @type {string}
     * @memberof LimitedUser
     */
    'currentAvatarImageUrl': string;
    /**
     * When profilePicOverride is not empty, use it instead.
     * @type {string}
     * @memberof LimitedUser
     */
    'currentAvatarThumbnailImageUrl': string;
    /**
     * 
     * @type {DeveloperType}
     * @memberof LimitedUser
     */
    'developerType': DeveloperType;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    'displayName': string;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    'fallbackAvatar': string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof LimitedUser
     */
    'id': string;
    /**
     * 
     * @type {boolean}
     * @memberof LimitedUser
     */
    'isFriend': boolean;
    /**
     * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
     * @type {string}
     * @memberof LimitedUser
     */
    'last_platform': string;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    'profilePicOverride': string;
    /**
     * 
     * @type {UserStatus}
     * @memberof LimitedUser
     */
    'status': UserStatus;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    'statusDescription': string;
    /**
     * <- Always empty.
     * @type {Array<string>}
     * @memberof LimitedUser
     */
    'tags': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    'userIcon': string;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    'location'?: string;
    /**
     * 
     * @type {string}
     * @memberof LimitedUser
     */
    'friendKey'?: string;
}
/**
 * 
 * @export
 * @interface LimitedWorld
 */
export interface LimitedWorld {
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof LimitedWorld
     */
    'authorId': string;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    'authorName': string;
    /**
     * 
     * @type {number}
     * @memberof LimitedWorld
     */
    'capacity': number;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    'created_at': string;
    /**
     * 
     * @type {number}
     * @memberof LimitedWorld
     */
    'favorites': number;
    /**
     * 
     * @type {number}
     * @memberof LimitedWorld
     */
    'heat': number;
    /**
     * WorldID be \"offline\" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof LimitedWorld
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    'imageUrl': string;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    'labsPublicationDate': string;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    'name': string;
    /**
     * 
     * @type {number}
     * @memberof LimitedWorld
     */
    'occupants': number;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    'organization': string;
    /**
     * 
     * @type {number}
     * @memberof LimitedWorld
     */
    'popularity': number;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    'publicationDate': string;
    /**
     * 
     * @type {ReleaseStatus}
     * @memberof LimitedWorld
     */
    'releaseStatus': ReleaseStatus;
    /**
     *  
     * @type {Array<string>}
     * @memberof LimitedWorld
     */
    'tags': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    'thumbnailImageUrl': string;
    /**
     *  
     * @type {Array<LimitedUnityPackage>}
     * @memberof LimitedWorld
     */
    'unityPackages': Array<LimitedUnityPackage>;
    /**
     * 
     * @type {string}
     * @memberof LimitedWorld
     */
    'updated_at': string;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const MIMEType = {
    ImageJpeg: 'image/jpeg',
    ImageJpg: 'image/jpg',
    ImagePng: 'image/png',
    ImageWebp: 'image/webp',
    ImageGif: 'image/gif',
    ImageBmp: 'image/bmp',
    ImageSvgxml: 'image/svg＋xml',
    ImageTiff: 'image/tiff',
    ApplicationXAvatar: 'application/x-avatar',
    ApplicationXWorld: 'application/x-world',
    ApplicationGzip: 'application/gzip',
    ApplicationXRsyncSignature: 'application/x-rsync-signature',
    ApplicationXRsyncDelta: 'application/x-rsync-delta',
    ApplicationOctetStream: 'application/octet-stream'
} as const;

export type MIMEType = typeof MIMEType[keyof typeof MIMEType];


/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {Response}
     * @memberof ModelError
     */
    'error'?: Response;
}
/**
 * 
 * @export
 * @interface ModelFile
 */
export interface ModelFile {
    /**
     * 
     * @type {string}
     * @memberof ModelFile
     */
    'extension': string;
    /**
     * 
     * @type {string}
     * @memberof ModelFile
     */
    'id': string;
    /**
     * 
     * @type {MIMEType}
     * @memberof ModelFile
     */
    'mimeType': MIMEType;
    /**
     * 
     * @type {string}
     * @memberof ModelFile
     */
    'name': string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof ModelFile
     */
    'ownerId': string;
    /**
     *  
     * @type {Array<string>}
     * @memberof ModelFile
     */
    'tags': Array<string>;
    /**
     *  
     * @type {Set<FileVersion>}
     * @memberof ModelFile
     */
    'versions': Set<FileVersion>;
}
/**
 * 
 * @export
 * @interface ModerateUserRequest
 */
export interface ModerateUserRequest {
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof ModerateUserRequest
     */
    'moderated': string;
    /**
     * 
     * @type {PlayerModerationType}
     * @memberof ModerateUserRequest
     */
    'type': PlayerModerationType;
}
/**
 * 
 * @export
 * @interface Notification
 */
export interface Notification {
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    'created_at': string;
    /**
     * **NOTICE:** This is not a JSON object, this is a json **encoded** object, meaning you have to json-de-encode to get the NotificationDetail object depending on the NotificationType.
     * @type {string}
     * @memberof Notification
     */
    'details': string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    'message': string;
    /**
     * 
     * @type {boolean}
     * @memberof Notification
     */
    'seen': boolean;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof Notification
     */
    'senderUserId': string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    'senderUsername': string;
    /**
     * 
     * @type {NotificationType}
     * @memberof Notification
     */
    'type': NotificationType;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const NotificationType = {
    FriendRequest: 'friendRequest',
    Invite: 'invite',
    InviteResponse: 'inviteResponse',
    RequestInvite: 'requestInvite',
    RequestInviteResponse: 'requestInviteResponse',
    Votetokick: 'votetokick'
} as const;

export type NotificationType = typeof NotificationType[keyof typeof NotificationType];


/**
 * 
 * @export
 * @interface PastDisplayName
 */
export interface PastDisplayName {
    /**
     * 
     * @type {string}
     * @memberof PastDisplayName
     */
    'displayName': string;
    /**
     * 
     * @type {string}
     * @memberof PastDisplayName
     */
    'updated_at': string;
}
/**
 * 
 * @export
 * @interface Permission
 */
export interface Permission {
    /**
     * 
     * @type {string}
     * @memberof Permission
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Permission
     */
    'name': string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof Permission
     */
    'ownerId': string;
    /**
     * 
     * @type {object}
     * @memberof Permission
     */
    'data'?: object;
}
/**
 * 
 * @export
 * @interface PlayerModeration
 */
export interface PlayerModeration {
    /**
     * 
     * @type {string}
     * @memberof PlayerModeration
     */
    'created': string;
    /**
     * 
     * @type {string}
     * @memberof PlayerModeration
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof PlayerModeration
     */
    'sourceDisplayName': string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof PlayerModeration
     */
    'sourceUserId': string;
    /**
     * 
     * @type {string}
     * @memberof PlayerModeration
     */
    'targetDisplayName': string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof PlayerModeration
     */
    'targetUserId': string;
    /**
     * 
     * @type {PlayerModerationType}
     * @memberof PlayerModeration
     */
    'type': PlayerModerationType;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const PlayerModerationType = {
    Mute: 'mute',
    Unmute: 'unmute',
    Block: 'block',
    Unblock: 'unblock',
    HideAvatar: 'hideAvatar',
    ShowAvatar: 'showAvatar',
    InteractOn: 'interactOn',
    InteractOff: 'interactOff'
} as const;

export type PlayerModerationType = typeof PlayerModerationType[keyof typeof PlayerModerationType];


/**
 * Public Announcement
 * @export
 * @interface PublicAnnouncement
 */
export interface PublicAnnouncement {
    /**
     * Announcement name
     * @type {string}
     * @memberof PublicAnnouncement
     */
    'name': string;
    /**
     * Announcement text
     * @type {string}
     * @memberof PublicAnnouncement
     */
    'text': string;
}
/**
 * API/Photon region.
 * @export
 * @enum {string}
 */

export const Region = {
    Us: 'us',
    Use: 'use',
    Usw: 'usw',
    Eu: 'eu',
    Jp: 'jp',
    Unknown: 'unknown'
} as const;

export type Region = typeof Region[keyof typeof Region];


/**
 * 
 * @export
 * @enum {string}
 */

export const ReleaseStatus = {
    Public: 'public',
    Private: 'private',
    Hidden: 'hidden'
} as const;

export type ReleaseStatus = typeof ReleaseStatus[keyof typeof ReleaseStatus];


/**
 * 
 * @export
 * @interface RequestInviteRequest
 */
export interface RequestInviteRequest {
    /**
     * 
     * @type {number}
     * @memberof RequestInviteRequest
     */
    'messageSlot'?: number;
}
/**
 * 
 * @export
 * @interface Response
 */
export interface Response {
    /**
     * 
     * @type {string}
     * @memberof Response
     */
    'message'?: string;
    /**
     * 
     * @type {number}
     * @memberof Response
     */
    'status_code': number;
}
/**
 * 
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    'steamItemId': string;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    'amount': number;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    'description': string;
    /**
     * 
     * @type {SubscriptionPeriod}
     * @memberof Subscription
     */
    'period': SubscriptionPeriod;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    'tier': number;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const SubscriptionPeriod = {
    Hour: 'hour',
    Day: 'day',
    Week: 'week',
    Month: 'month',
    Year: 'year'
} as const;

export type SubscriptionPeriod = typeof SubscriptionPeriod[keyof typeof SubscriptionPeriod];


/**
 * 
 * @export
 * @interface Success
 */
export interface Success {
    /**
     * 
     * @type {Response}
     * @memberof Success
     */
    'success'?: Response;
}
/**
 * 
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'id': string;
    /**
     * 
     * @type {TransactionStatus}
     * @memberof Transaction
     */
    'status': TransactionStatus;
    /**
     * 
     * @type {Subscription}
     * @memberof Transaction
     */
    'subscription': Subscription;
    /**
     * 
     * @type {boolean}
     * @memberof Transaction
     */
    'sandbox': boolean;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'updated_at': string;
    /**
     * 
     * @type {TransactionSteamInfo}
     * @memberof Transaction
     */
    'steam'?: TransactionSteamInfo;
    /**
     * 
     * @type {TransactionAgreement}
     * @memberof Transaction
     */
    'agreement'?: TransactionAgreement;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'error': string;
}
/**
 * 
 * @export
 * @interface TransactionAgreement
 */
export interface TransactionAgreement {
    /**
     * 
     * @type {string}
     * @memberof TransactionAgreement
     */
    'agreementId': string;
    /**
     * 
     * @type {number}
     * @memberof TransactionAgreement
     */
    'itemId': number;
    /**
     * This is NOT TransactionStatus, but whatever Steam return.
     * @type {string}
     * @memberof TransactionAgreement
     */
    'status': string;
    /**
     * 
     * @type {string}
     * @memberof TransactionAgreement
     */
    'period': string;
    /**
     * 
     * @type {number}
     * @memberof TransactionAgreement
     */
    'frequency': number;
    /**
     * 
     * @type {string}
     * @memberof TransactionAgreement
     */
    'billingType': string;
    /**
     * 
     * @type {string}
     * @memberof TransactionAgreement
     */
    'startDate': string;
    /**
     * 
     * @type {string}
     * @memberof TransactionAgreement
     */
    'endDate': string;
    /**
     * 
     * @type {number}
     * @memberof TransactionAgreement
     */
    'recurringAmt': number;
    /**
     * 
     * @type {string}
     * @memberof TransactionAgreement
     */
    'currency': string;
    /**
     * 
     * @type {string}
     * @memberof TransactionAgreement
     */
    'timeCreated': string;
    /**
     * 
     * @type {string}
     * @memberof TransactionAgreement
     */
    'nextPayment': string;
    /**
     * 
     * @type {string}
     * @memberof TransactionAgreement
     */
    'lastPayment': string;
    /**
     * 
     * @type {number}
     * @memberof TransactionAgreement
     */
    'lastAmount': number;
    /**
     * 
     * @type {number}
     * @memberof TransactionAgreement
     */
    'lastAmountVat': number;
    /**
     * 
     * @type {number}
     * @memberof TransactionAgreement
     */
    'outstanding': number;
    /**
     * 
     * @type {number}
     * @memberof TransactionAgreement
     */
    'failedAttempts': number;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const TransactionStatus = {
    Active: 'active',
    Failed: 'failed',
    Expired: 'expired',
    Chargeback: 'chargeback'
} as const;

export type TransactionStatus = typeof TransactionStatus[keyof typeof TransactionStatus];


/**
 * 
 * @export
 * @interface TransactionSteamInfo
 */
export interface TransactionSteamInfo {
    /**
     * 
     * @type {TransactionSteamWalletInfo}
     * @memberof TransactionSteamInfo
     */
    'walletInfo': TransactionSteamWalletInfo;
    /**
     * Steam User ID
     * @type {string}
     * @memberof TransactionSteamInfo
     */
    'steamId': string;
    /**
     * Steam Order ID
     * @type {string}
     * @memberof TransactionSteamInfo
     */
    'orderId': string;
    /**
     * Empty
     * @type {string}
     * @memberof TransactionSteamInfo
     */
    'steamUrl': string;
    /**
     * Steam Transaction ID, NOT the same as VRChat TransactionID
     * @type {string}
     * @memberof TransactionSteamInfo
     */
    'transId': string;
}
/**
 * 
 * @export
 * @interface TransactionSteamWalletInfo
 */
export interface TransactionSteamWalletInfo {
    /**
     * 
     * @type {string}
     * @memberof TransactionSteamWalletInfo
     */
    'state': string;
    /**
     * 
     * @type {string}
     * @memberof TransactionSteamWalletInfo
     */
    'country': string;
    /**
     * 
     * @type {string}
     * @memberof TransactionSteamWalletInfo
     */
    'currency': string;
    /**
     * 
     * @type {string}
     * @memberof TransactionSteamWalletInfo
     */
    'status': string;
}
/**
 * 
 * @export
 * @interface TwoFactorAuthCode
 */
export interface TwoFactorAuthCode {
    /**
     * 
     * @type {string}
     * @memberof TwoFactorAuthCode
     */
    'code': string;
}
/**
 * 
 * @export
 * @interface UnityPackage
 */
export interface UnityPackage {
    /**
     * 
     * @type {string}
     * @memberof UnityPackage
     */
    'assetUrl'?: string;
    /**
     * 
     * @type {object}
     * @memberof UnityPackage
     */
    'assetUrlObject'?: object;
    /**
     * 
     * @type {number}
     * @memberof UnityPackage
     */
    'assetVersion': number;
    /**
     * 
     * @type {string}
     * @memberof UnityPackage
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof UnityPackage
     */
    'id': string;
    /**
     * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
     * @type {string}
     * @memberof UnityPackage
     */
    'platform': string;
    /**
     * 
     * @type {string}
     * @memberof UnityPackage
     */
    'pluginUrl'?: string;
    /**
     * 
     * @type {object}
     * @memberof UnityPackage
     */
    'pluginUrlObject'?: object;
    /**
     * 
     * @type {number}
     * @memberof UnityPackage
     */
    'unitySortNumber'?: number;
    /**
     * 
     * @type {string}
     * @memberof UnityPackage
     */
    'unityVersion': string;
}
/**
 * 
 * @export
 * @interface UpdateAvatarRequest
 */
export interface UpdateAvatarRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateAvatarRequest
     */
    'assetUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAvatarRequest
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAvatarRequest
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAvatarRequest
     */
    'description'?: string;
    /**
     *  
     * @type {Array<string>}
     * @memberof UpdateAvatarRequest
     */
    'tags'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UpdateAvatarRequest
     */
    'imageUrl'?: string;
    /**
     * 
     * @type {ReleaseStatus}
     * @memberof UpdateAvatarRequest
     */
    'releaseStatus'?: ReleaseStatus;
    /**
     * 
     * @type {number}
     * @memberof UpdateAvatarRequest
     */
    'version'?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateAvatarRequest
     */
    'unityPackageUrl'?: string;
}
/**
 * 
 * @export
 * @interface UpdateFavoriteGroupRequest
 */
export interface UpdateFavoriteGroupRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateFavoriteGroupRequest
     */
    'displayName'?: string;
    /**
     * 
     * @type {FavoriteGroupVisibility}
     * @memberof UpdateFavoriteGroupRequest
     */
    'visibility'?: FavoriteGroupVisibility;
    /**
     * Tags on FavoriteGroups are believed to do nothing.
     * @type {Array<string>}
     * @memberof UpdateFavoriteGroupRequest
     */
    'tags'?: Array<string>;
}
/**
 * 
 * @export
 * @interface UpdateInviteMessageRequest
 */
export interface UpdateInviteMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateInviteMessageRequest
     */
    'message': string;
}
/**
 * 
 * @export
 * @interface UpdateUserRequest
 */
export interface UpdateUserRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'birthday'?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateUserRequest
     */
    'acceptedTOSVersion'?: number;
    /**
     *  
     * @type {Array<string>}
     * @memberof UpdateUserRequest
     */
    'tags'?: Array<string>;
    /**
     * 
     * @type {UserStatus}
     * @memberof UpdateUserRequest
     */
    'status'?: UserStatus;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'statusDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'bio'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateUserRequest
     */
    'bioLinks'?: Array<string>;
    /**
     * MUST be a valid VRChat /file/ url.
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'userIcon'?: string;
}
/**
 * 
 * @export
 * @interface UpdateWorldRequest
 */
export interface UpdateWorldRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateWorldRequest
     */
    'assetUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateWorldRequest
     */
    'assetVersion'?: string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof UpdateWorldRequest
     */
    'authorId'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateWorldRequest
     */
    'authorName'?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateWorldRequest
     */
    'capacity'?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateWorldRequest
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateWorldRequest
     */
    'imageUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateWorldRequest
     */
    'name'?: string;
    /**
     * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
     * @type {string}
     * @memberof UpdateWorldRequest
     */
    'platform'?: string;
    /**
     * 
     * @type {ReleaseStatus}
     * @memberof UpdateWorldRequest
     */
    'releaseStatus'?: ReleaseStatus;
    /**
     *  
     * @type {Array<string>}
     * @memberof UpdateWorldRequest
     */
    'tags'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UpdateWorldRequest
     */
    'unityPackageUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateWorldRequest
     */
    'unityVersion'?: string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'allowAvatarCopying': boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'bio': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof User
     */
    'bioLinks': Array<string>;
    /**
     * When profilePicOverride is not empty, use it instead.
     * @type {string}
     * @memberof User
     */
    'currentAvatarImageUrl': string;
    /**
     * When profilePicOverride is not empty, use it instead.
     * @type {string}
     * @memberof User
     */
    'currentAvatarThumbnailImageUrl': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'date_joined': string;
    /**
     * 
     * @type {DeveloperType}
     * @memberof User
     */
    'developerType': DeveloperType;
    /**
     * A users visual display name. This is what shows up in-game, and can different from their `username`. Changing display name is restricted to a cooldown period.
     * @type {string}
     * @memberof User
     */
    'displayName': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'friendKey': string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof User
     */
    'id': string;
    /**
     * InstanceID can be \"offline\" on User profiles if you are not friends with that user and \"private\" if you are friends and user is in private instance.
     * @type {string}
     * @memberof User
     */
    'instanceId'?: string;
    /**
     * Either their `friendKey`, or empty string if you are not friends. Unknown usage.
     * @type {boolean}
     * @memberof User
     */
    'isFriend': boolean;
    /**
     * Either a date-time or empty string.
     * @type {string}
     * @memberof User
     */
    'last_login': string;
    /**
     * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
     * @type {string}
     * @memberof User
     */
    'last_platform': string;
    /**
     * WorldID be \"offline\" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof User
     */
    'location'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'profilePicOverride': string;
    /**
     * 
     * @type {UserState}
     * @memberof User
     */
    'state': UserState;
    /**
     * 
     * @type {UserStatus}
     * @memberof User
     */
    'status': UserStatus;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'statusDescription': string;
    /**
     *  
     * @type {Array<string>}
     * @memberof User
     */
    'tags': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'userIcon': string;
    /**
     * A users unique name, used during login. This is different from `displayName` which is what shows up in-game. A users `username` can never be changed.
     * @type {string}
     * @memberof User
     */
    'username': string;
    /**
     * WorldID be \"offline\" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof User
     */
    'worldId'?: string;
}
/**
 * Status object representing if a queried user by username or userId exists or not. This model is primarily used by the `/auth/exists` endpoint, which in turn is used during registration. Please see the documentation on that endpoint for more information on usage.
 * @export
 * @interface UserExists
 */
export interface UserExists {
    /**
     * Status if a user exist with that username or userId.
     * @type {boolean}
     * @memberof UserExists
     */
    'userExists': boolean;
}
/**
 * * \"online\" User is online in VRChat * \"active\" User is online, but not in VRChat * \"offline\" User is offline  Always offline when returned through `getCurrentUser` (/auth/user).
 * @export
 * @enum {string}
 */

export const UserState = {
    Offline: 'offline',
    Active: 'active',
    Online: 'online'
} as const;

export type UserState = typeof UserState[keyof typeof UserState];


/**
 * Defines the User\'s current status, for example \"ask me\", \"join me\" or \"offline. This status is a combined indicator of their online activity and privacy preference.
 * @export
 * @enum {string}
 */

export const UserStatus = {
    Active: 'active',
    JoinMe: 'join me',
    AskMe: 'ask me',
    Busy: 'busy',
    Offline: 'offline'
} as const;

export type UserStatus = typeof UserStatus[keyof typeof UserStatus];


/**
 * 
 * @export
 * @interface UserSubscription
 */
export interface UserSubscription {
    /**
     * 
     * @type {string}
     * @memberof UserSubscription
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof UserSubscription
     */
    'transactionId': string;
    /**
     * Which \"Store\" it came from. Right now only Stores are \"Steam\" and \"Admin\".
     * @type {string}
     * @memberof UserSubscription
     */
    'store': string;
    /**
     * 
     * @type {string}
     * @memberof UserSubscription
     */
    'steamItemId'?: string;
    /**
     * 
     * @type {number}
     * @memberof UserSubscription
     */
    'amount': number;
    /**
     * 
     * @type {string}
     * @memberof UserSubscription
     */
    'description': string;
    /**
     * 
     * @type {SubscriptionPeriod}
     * @memberof UserSubscription
     */
    'period': SubscriptionPeriod;
    /**
     * 
     * @type {number}
     * @memberof UserSubscription
     */
    'tier': number;
    /**
     * 
     * @type {boolean}
     * @memberof UserSubscription
     */
    'active': boolean;
    /**
     * 
     * @type {TransactionStatus}
     * @memberof UserSubscription
     */
    'status': TransactionStatus;
    /**
     * 
     * @type {string}
     * @memberof UserSubscription
     */
    'expires': string;
    /**
     * 
     * @type {string}
     * @memberof UserSubscription
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof UserSubscription
     */
    'updated_at': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserSubscription
     */
    'licenseGroups': Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof UserSubscription
     */
    'isGift': boolean;
}
/**
 * 
 * @export
 * @interface Verify2FAResult
 */
export interface Verify2FAResult {
    /**
     * 
     * @type {boolean}
     * @memberof Verify2FAResult
     */
    'verified': boolean;
}
/**
 * 
 * @export
 * @interface VerifyAuthTokenResult
 */
export interface VerifyAuthTokenResult {
    /**
     * 
     * @type {boolean}
     * @memberof VerifyAuthTokenResult
     */
    'ok': boolean;
    /**
     * 
     * @type {string}
     * @memberof VerifyAuthTokenResult
     */
    'token': string;
}
/**
 * 
 * @export
 * @interface World
 */
export interface World {
    /**
     * Empty if unauthenticated.
     * @type {string}
     * @memberof World
     */
    'assetUrl': string;
    /**
     * 
     * @type {object}
     * @memberof World
     */
    'assetUrlObject': object;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof World
     */
    'authorId': string;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    'authorName': string;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    'capacity': number;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    'description': string;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    'favorites'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof World
     */
    'featured': boolean;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    'heat': number;
    /**
     * WorldID be \"offline\" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof World
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    'imageUrl': string;
    /**
     * 
     * @type {Array<Array<any>>}
     * @memberof World
     */
    'instances'?: Array<Array<any>>;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    'labsPublicationDate': string;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    'namespace': string;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    'occupants'?: number;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    'organization': string;
    /**
     * 
     * @type {object}
     * @memberof World
     */
    'pluginUrlObject': object;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    'popularity': number;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    'previewYoutubeId'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    'privateOccupants'?: number;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    'publicOccupants'?: number;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    'publicationDate': string;
    /**
     * 
     * @type {ReleaseStatus}
     * @memberof World
     */
    'releaseStatus': ReleaseStatus;
    /**
     *  
     * @type {Array<string>}
     * @memberof World
     */
    'tags': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    'thumbnailImageUrl': string;
    /**
     * 
     * @type {object}
     * @memberof World
     */
    'unityPackageUrlObject': object;
    /**
     * Empty if unauthenticated.
     * @type {Array<UnityPackage>}
     * @memberof World
     */
    'unityPackages': Array<UnityPackage>;
    /**
     * 
     * @type {string}
     * @memberof World
     */
    'updated_at': string;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    'version': number;
    /**
     * 
     * @type {number}
     * @memberof World
     */
    'visits': number;
}
/**
 * 
 * @export
 * @interface WorldMetadata
 */
export interface WorldMetadata {
    /**
     * WorldID be \"offline\" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof WorldMetadata
     */
    'id': string;
    /**
     * 
     * @type {object}
     * @memberof WorldMetadata
     */
    'metadata': object;
}
/**
 * 
 * @export
 * @interface WorldPublishStatus
 */
export interface WorldPublishStatus {
    /**
     * 
     * @type {boolean}
     * @memberof WorldPublishStatus
     */
    'canPubilsh': boolean;
}

/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Checks if a user by a given `username`, `displayName` or `email` exist. This is used during registration to check if a username has already been taken, during change of displayName to check if a displayName is available, and during change of email to check if the email is already used. In the later two cases the `excludeUserId` is used to exclude oneself, otherwise the result would always be true.  It is **REQUIRED** to include **AT LEAST** `username`, `displayName` **or** `email` query parameter. Although they can be combined - in addition with `excludeUserId` (generally to exclude yourself) - to further fine-tune the search.
         * @summary Check User Exists
         * @param {string} [email] Filter by email.
         * @param {string} [displayName] Filter by displayName.
         * @param {string} [userId] Filter by UserID.
         * @param {string} [excludeUserId] Exclude by UserID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkUserExists: async (email?: string, displayName?: string, userId?: string, excludeUserId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/exists`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }

            if (displayName !== undefined) {
                localVarQueryParameter['displayName'] = displayName;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (excludeUserId !== undefined) {
                localVarQueryParameter['excludeUserId'] = excludeUserId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.  **VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.  **METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.
         * @summary Delete User
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('deleteUser', 'userId', userId)
            const localVarPath = `/user/{userId}/delete`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint does the following two operations:   1) Checks if you are already logged in by looking for a valid `auth` cookie. If you are have a valid auth cookie then no additional auth-related actions are taken. If you are **not** logged in then it will log you in with the `Authorization` header and set the `auth` cookie. The `auth` cookie will only be sent once.   2) If logged in, this function will also return the CurrentUser object containing detailed information about the currently logged in user.  **WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie if you are often restarting the program. The provided API libraries automatically save cookies during runtime, but does not persist during restart. While it can be fine to use username/password during development, expect in production to very fast run into the rate-limit and be temporarily blocked from making new sessions until older ones expire. The exact number of simultaneous sessions is unknown/undisclosed.
         * @summary Login and/or Get Current User Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentUser: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authCookie required

            // authentication authHeader required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication twoFactorAuthCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Invalidates the login session.
         * @summary Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.
         * @summary Verify 2FA code
         * @param {TwoFactorAuthCode} [twoFactorAuthCode] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verify2FA: async (twoFactorAuthCode?: TwoFactorAuthCode, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/twofactorauth/totp/verify`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(twoFactorAuthCode, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Verify whether the currently provided Auth Token is valid.
         * @summary Verify Auth Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyAuthToken: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.
         * @summary Verify 2FA code with Recovery code
         * @param {TwoFactorAuthCode} [twoFactorAuthCode] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyRecoveryCode: async (twoFactorAuthCode?: TwoFactorAuthCode, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/twofactorauth/otp/verify`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(twoFactorAuthCode, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationApiAxiosParamCreator(configuration)
    return {
        /**
         * Checks if a user by a given `username`, `displayName` or `email` exist. This is used during registration to check if a username has already been taken, during change of displayName to check if a displayName is available, and during change of email to check if the email is already used. In the later two cases the `excludeUserId` is used to exclude oneself, otherwise the result would always be true.  It is **REQUIRED** to include **AT LEAST** `username`, `displayName` **or** `email` query parameter. Although they can be combined - in addition with `excludeUserId` (generally to exclude yourself) - to further fine-tune the search.
         * @summary Check User Exists
         * @param {string} [email] Filter by email.
         * @param {string} [displayName] Filter by displayName.
         * @param {string} [userId] Filter by UserID.
         * @param {string} [excludeUserId] Exclude by UserID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkUserExists(email?: string, displayName?: string, userId?: string, excludeUserId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserExists>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkUserExists(email, displayName, userId, excludeUserId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.  **VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.  **METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.
         * @summary Delete User
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUser(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CurrentUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUser(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint does the following two operations:   1) Checks if you are already logged in by looking for a valid `auth` cookie. If you are have a valid auth cookie then no additional auth-related actions are taken. If you are **not** logged in then it will log you in with the `Authorization` header and set the `auth` cookie. The `auth` cookie will only be sent once.   2) If logged in, this function will also return the CurrentUser object containing detailed information about the currently logged in user.  **WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie if you are often restarting the program. The provided API libraries automatically save cookies during runtime, but does not persist during restart. While it can be fine to use username/password during development, expect in production to very fast run into the rate-limit and be temporarily blocked from making new sessions until older ones expire. The exact number of simultaneous sessions is unknown/undisclosed.
         * @summary Login and/or Get Current User Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCurrentUser(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CurrentUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCurrentUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Invalidates the login session.
         * @summary Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async logout(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logout(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.
         * @summary Verify 2FA code
         * @param {TwoFactorAuthCode} [twoFactorAuthCode] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verify2FA(twoFactorAuthCode?: TwoFactorAuthCode, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Verify2FAResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verify2FA(twoFactorAuthCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Verify whether the currently provided Auth Token is valid.
         * @summary Verify Auth Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyAuthToken(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VerifyAuthTokenResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyAuthToken(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.
         * @summary Verify 2FA code with Recovery code
         * @param {TwoFactorAuthCode} [twoFactorAuthCode] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyRecoveryCode(twoFactorAuthCode?: TwoFactorAuthCode, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Verify2FAResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyRecoveryCode(twoFactorAuthCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationApiFp(configuration)
    return {
        /**
         * Checks if a user by a given `username`, `displayName` or `email` exist. This is used during registration to check if a username has already been taken, during change of displayName to check if a displayName is available, and during change of email to check if the email is already used. In the later two cases the `excludeUserId` is used to exclude oneself, otherwise the result would always be true.  It is **REQUIRED** to include **AT LEAST** `username`, `displayName` **or** `email` query parameter. Although they can be combined - in addition with `excludeUserId` (generally to exclude yourself) - to further fine-tune the search.
         * @summary Check User Exists
         * @param {string} [email] Filter by email.
         * @param {string} [displayName] Filter by displayName.
         * @param {string} [userId] Filter by UserID.
         * @param {string} [excludeUserId] Exclude by UserID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkUserExists(email?: string, displayName?: string, userId?: string, excludeUserId?: string, options?: any): AxiosPromise<UserExists> {
            return localVarFp.checkUserExists(email, displayName, userId, excludeUserId, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.  **VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.  **METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.
         * @summary Delete User
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser(userId: string, options?: any): AxiosPromise<CurrentUser> {
            return localVarFp.deleteUser(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint does the following two operations:   1) Checks if you are already logged in by looking for a valid `auth` cookie. If you are have a valid auth cookie then no additional auth-related actions are taken. If you are **not** logged in then it will log you in with the `Authorization` header and set the `auth` cookie. The `auth` cookie will only be sent once.   2) If logged in, this function will also return the CurrentUser object containing detailed information about the currently logged in user.  **WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie if you are often restarting the program. The provided API libraries automatically save cookies during runtime, but does not persist during restart. While it can be fine to use username/password during development, expect in production to very fast run into the rate-limit and be temporarily blocked from making new sessions until older ones expire. The exact number of simultaneous sessions is unknown/undisclosed.
         * @summary Login and/or Get Current User Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentUser(options?: any): AxiosPromise<CurrentUser> {
            return localVarFp.getCurrentUser(options).then((request) => request(axios, basePath));
        },
        /**
         * Invalidates the login session.
         * @summary Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout(options?: any): AxiosPromise<Success> {
            return localVarFp.logout(options).then((request) => request(axios, basePath));
        },
        /**
         * Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.
         * @summary Verify 2FA code
         * @param {TwoFactorAuthCode} [twoFactorAuthCode] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verify2FA(twoFactorAuthCode?: TwoFactorAuthCode, options?: any): AxiosPromise<Verify2FAResult> {
            return localVarFp.verify2FA(twoFactorAuthCode, options).then((request) => request(axios, basePath));
        },
        /**
         * Verify whether the currently provided Auth Token is valid.
         * @summary Verify Auth Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyAuthToken(options?: any): AxiosPromise<VerifyAuthTokenResult> {
            return localVarFp.verifyAuthToken(options).then((request) => request(axios, basePath));
        },
        /**
         * Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.
         * @summary Verify 2FA code with Recovery code
         * @param {TwoFactorAuthCode} [twoFactorAuthCode] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyRecoveryCode(twoFactorAuthCode?: TwoFactorAuthCode, options?: any): AxiosPromise<Verify2FAResult> {
            return localVarFp.verifyRecoveryCode(twoFactorAuthCode, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI {
    /**
     * Checks if a user by a given `username`, `displayName` or `email` exist. This is used during registration to check if a username has already been taken, during change of displayName to check if a displayName is available, and during change of email to check if the email is already used. In the later two cases the `excludeUserId` is used to exclude oneself, otherwise the result would always be true.  It is **REQUIRED** to include **AT LEAST** `username`, `displayName` **or** `email` query parameter. Although they can be combined - in addition with `excludeUserId` (generally to exclude yourself) - to further fine-tune the search.
     * @summary Check User Exists
     * @param {string} [email] Filter by email.
     * @param {string} [displayName] Filter by displayName.
     * @param {string} [userId] Filter by UserID.
     * @param {string} [excludeUserId] Exclude by UserID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public checkUserExists(email?: string, displayName?: string, userId?: string, excludeUserId?: string, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).checkUserExists(email, displayName, userId, excludeUserId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.  **VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.  **METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.
     * @summary Delete User
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public deleteUser(userId: string, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).deleteUser(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint does the following two operations:   1) Checks if you are already logged in by looking for a valid `auth` cookie. If you are have a valid auth cookie then no additional auth-related actions are taken. If you are **not** logged in then it will log you in with the `Authorization` header and set the `auth` cookie. The `auth` cookie will only be sent once.   2) If logged in, this function will also return the CurrentUser object containing detailed information about the currently logged in user.  **WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie if you are often restarting the program. The provided API libraries automatically save cookies during runtime, but does not persist during restart. While it can be fine to use username/password during development, expect in production to very fast run into the rate-limit and be temporarily blocked from making new sessions until older ones expire. The exact number of simultaneous sessions is unknown/undisclosed.
     * @summary Login and/or Get Current User Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public getCurrentUser(options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).getCurrentUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Invalidates the login session.
     * @summary Logout
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public logout(options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).logout(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.
     * @summary Verify 2FA code
     * @param {TwoFactorAuthCode} [twoFactorAuthCode] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public verify2FA(twoFactorAuthCode?: TwoFactorAuthCode, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).verify2FA(twoFactorAuthCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Verify whether the currently provided Auth Token is valid.
     * @summary Verify Auth Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public verifyAuthToken(options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).verifyAuthToken(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.
     * @summary Verify 2FA code with Recovery code
     * @param {TwoFactorAuthCode} [twoFactorAuthCode] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public verifyRecoveryCode(twoFactorAuthCode?: TwoFactorAuthCode, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).verifyRecoveryCode(twoFactorAuthCode, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * AvatarsApi - axios parameter creator
 * @export
 */
export const AvatarsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create an avatar. It\'s possible to optionally specify a ID if you want a custom one. Attempting to create an Avatar with an already claimed ID will result in a DB error.
         * @summary Create Avatar
         * @param {CreateAvatarRequest} [createAvatarRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAvatar: async (createAvatarRequest?: CreateAvatarRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/avatars`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createAvatarRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete an avatar. Notice an avatar is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The AvatarID is permanently reserved.
         * @summary Delete Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAvatar: async (avatarId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'avatarId' is not null or undefined
            assertParamExists('deleteAvatar', 'avatarId', avatarId)
            const localVarPath = `/avatars/{avatarId}`
                .replace(`{${"avatarId"}}`, encodeURIComponent(String(avatarId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get information about a specific Avatar.
         * @summary Get Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAvatar: async (avatarId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'avatarId' is not null or undefined
            assertParamExists('getAvatar', 'avatarId', avatarId)
            const localVarPath = `/avatars/{avatarId}`
                .replace(`{${"avatarId"}}`, encodeURIComponent(String(avatarId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search and list favorited avatars by query filters.
         * @summary List Favorited Avatars
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoritedAvatars: async (featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/avatars/favorites`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (featured !== undefined) {
                localVarQueryParameter['featured'] = featured;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (notag !== undefined) {
                localVarQueryParameter['notag'] = notag;
            }

            if (releaseStatus !== undefined) {
                localVarQueryParameter['releaseStatus'] = releaseStatus;
            }

            if (maxUnityVersion !== undefined) {
                localVarQueryParameter['maxUnityVersion'] = maxUnityVersion;
            }

            if (minUnityVersion !== undefined) {
                localVarQueryParameter['minUnityVersion'] = minUnityVersion;
            }

            if (platform !== undefined) {
                localVarQueryParameter['platform'] = platform;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search and list avatars by query filters. You can only search your own or featured avatars. It is not possible as a normal user to search other peoples avatars.
         * @summary Search Avatars
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {'me'} [user] Set to &#x60;me&#x60; for searching own avatars.
         * @param {string} [userId] Filter by UserID.
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchAvatars: async (featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', user?: 'me', userId?: string, n?: number, order?: 'ascending' | 'descending', offset?: number, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/avatars`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (featured !== undefined) {
                localVarQueryParameter['featured'] = featured;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (notag !== undefined) {
                localVarQueryParameter['notag'] = notag;
            }

            if (releaseStatus !== undefined) {
                localVarQueryParameter['releaseStatus'] = releaseStatus;
            }

            if (maxUnityVersion !== undefined) {
                localVarQueryParameter['maxUnityVersion'] = maxUnityVersion;
            }

            if (minUnityVersion !== undefined) {
                localVarQueryParameter['minUnityVersion'] = minUnityVersion;
            }

            if (platform !== undefined) {
                localVarQueryParameter['platform'] = platform;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Switches into that avatar.
         * @summary Select Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        selectAvatar: async (avatarId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'avatarId' is not null or undefined
            assertParamExists('selectAvatar', 'avatarId', avatarId)
            const localVarPath = `/avatars/{avatarId}/select`
                .replace(`{${"avatarId"}}`, encodeURIComponent(String(avatarId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Switches into that avatar as your fallback avatar.
         * @summary Select Fallback Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        selectFallbackAvatar: async (avatarId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'avatarId' is not null or undefined
            assertParamExists('selectFallbackAvatar', 'avatarId', avatarId)
            const localVarPath = `/avatars/{avatarId}/selectFallback`
                .replace(`{${"avatarId"}}`, encodeURIComponent(String(avatarId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update information about a specific avatar.
         * @summary Update Avatar
         * @param {string} avatarId 
         * @param {UpdateAvatarRequest} [updateAvatarRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAvatar: async (avatarId: string, updateAvatarRequest?: UpdateAvatarRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'avatarId' is not null or undefined
            assertParamExists('updateAvatar', 'avatarId', avatarId)
            const localVarPath = `/avatars/{avatarId}`
                .replace(`{${"avatarId"}}`, encodeURIComponent(String(avatarId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateAvatarRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AvatarsApi - functional programming interface
 * @export
 */
export const AvatarsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AvatarsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create an avatar. It\'s possible to optionally specify a ID if you want a custom one. Attempting to create an Avatar with an already claimed ID will result in a DB error.
         * @summary Create Avatar
         * @param {CreateAvatarRequest} [createAvatarRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAvatar(createAvatarRequest?: CreateAvatarRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Avatar>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAvatar(createAvatarRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete an avatar. Notice an avatar is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The AvatarID is permanently reserved.
         * @summary Delete Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAvatar(avatarId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Avatar>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAvatar(avatarId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get information about a specific Avatar.
         * @summary Get Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAvatar(avatarId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Avatar>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAvatar(avatarId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search and list favorited avatars by query filters.
         * @summary List Favorited Avatars
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFavoritedAvatars(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Avatar>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFavoritedAvatars(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search and list avatars by query filters. You can only search your own or featured avatars. It is not possible as a normal user to search other peoples avatars.
         * @summary Search Avatars
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {'me'} [user] Set to &#x60;me&#x60; for searching own avatars.
         * @param {string} [userId] Filter by UserID.
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchAvatars(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', user?: 'me', userId?: string, n?: number, order?: 'ascending' | 'descending', offset?: number, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Avatar>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchAvatars(featured, sort, user, userId, n, order, offset, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Switches into that avatar.
         * @summary Select Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async selectAvatar(avatarId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CurrentUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.selectAvatar(avatarId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Switches into that avatar as your fallback avatar.
         * @summary Select Fallback Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async selectFallbackAvatar(avatarId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CurrentUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.selectFallbackAvatar(avatarId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update information about a specific avatar.
         * @summary Update Avatar
         * @param {string} avatarId 
         * @param {UpdateAvatarRequest} [updateAvatarRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAvatar(avatarId: string, updateAvatarRequest?: UpdateAvatarRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Avatar>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAvatar(avatarId, updateAvatarRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AvatarsApi - factory interface
 * @export
 */
export const AvatarsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AvatarsApiFp(configuration)
    return {
        /**
         * Create an avatar. It\'s possible to optionally specify a ID if you want a custom one. Attempting to create an Avatar with an already claimed ID will result in a DB error.
         * @summary Create Avatar
         * @param {CreateAvatarRequest} [createAvatarRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAvatar(createAvatarRequest?: CreateAvatarRequest, options?: any): AxiosPromise<Avatar> {
            return localVarFp.createAvatar(createAvatarRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an avatar. Notice an avatar is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The AvatarID is permanently reserved.
         * @summary Delete Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAvatar(avatarId: string, options?: any): AxiosPromise<Avatar> {
            return localVarFp.deleteAvatar(avatarId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about a specific Avatar.
         * @summary Get Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAvatar(avatarId: string, options?: any): AxiosPromise<Avatar> {
            return localVarFp.getAvatar(avatarId, options).then((request) => request(axios, basePath));
        },
        /**
         * Search and list favorited avatars by query filters.
         * @summary List Favorited Avatars
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoritedAvatars(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: any): AxiosPromise<Array<Avatar>> {
            return localVarFp.getFavoritedAvatars(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Search and list avatars by query filters. You can only search your own or featured avatars. It is not possible as a normal user to search other peoples avatars.
         * @summary Search Avatars
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {'me'} [user] Set to &#x60;me&#x60; for searching own avatars.
         * @param {string} [userId] Filter by UserID.
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchAvatars(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', user?: 'me', userId?: string, n?: number, order?: 'ascending' | 'descending', offset?: number, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: any): AxiosPromise<Array<Avatar>> {
            return localVarFp.searchAvatars(featured, sort, user, userId, n, order, offset, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options).then((request) => request(axios, basePath));
        },
        /**
         * Switches into that avatar.
         * @summary Select Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        selectAvatar(avatarId: string, options?: any): AxiosPromise<CurrentUser> {
            return localVarFp.selectAvatar(avatarId, options).then((request) => request(axios, basePath));
        },
        /**
         * Switches into that avatar as your fallback avatar.
         * @summary Select Fallback Avatar
         * @param {string} avatarId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        selectFallbackAvatar(avatarId: string, options?: any): AxiosPromise<CurrentUser> {
            return localVarFp.selectFallbackAvatar(avatarId, options).then((request) => request(axios, basePath));
        },
        /**
         * Update information about a specific avatar.
         * @summary Update Avatar
         * @param {string} avatarId 
         * @param {UpdateAvatarRequest} [updateAvatarRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAvatar(avatarId: string, updateAvatarRequest?: UpdateAvatarRequest, options?: any): AxiosPromise<Avatar> {
            return localVarFp.updateAvatar(avatarId, updateAvatarRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AvatarsApi - object-oriented interface
 * @export
 * @class AvatarsApi
 * @extends {BaseAPI}
 */
export class AvatarsApi extends BaseAPI {
    /**
     * Create an avatar. It\'s possible to optionally specify a ID if you want a custom one. Attempting to create an Avatar with an already claimed ID will result in a DB error.
     * @summary Create Avatar
     * @param {CreateAvatarRequest} [createAvatarRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AvatarsApi
     */
    public createAvatar(createAvatarRequest?: CreateAvatarRequest, options?: AxiosRequestConfig) {
        return AvatarsApiFp(this.configuration).createAvatar(createAvatarRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete an avatar. Notice an avatar is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The AvatarID is permanently reserved.
     * @summary Delete Avatar
     * @param {string} avatarId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AvatarsApi
     */
    public deleteAvatar(avatarId: string, options?: AxiosRequestConfig) {
        return AvatarsApiFp(this.configuration).deleteAvatar(avatarId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get information about a specific Avatar.
     * @summary Get Avatar
     * @param {string} avatarId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AvatarsApi
     */
    public getAvatar(avatarId: string, options?: AxiosRequestConfig) {
        return AvatarsApiFp(this.configuration).getAvatar(avatarId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search and list favorited avatars by query filters.
     * @summary List Favorited Avatars
     * @param {boolean} [featured] Filters on featured results.
     * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
     * @param {number} [n] The number of objects to return.
     * @param {'ascending' | 'descending'} [order] 
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {string} [search] Filters by world name.
     * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
     * @param {string} [notag] Tags to exclude (comma-separated).
     * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
     * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
     * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
     * @param {string} [platform] The platform the asset supports.
     * @param {string} [userId] Target user to see information on, admin-only.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AvatarsApi
     */
    public getFavoritedAvatars(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: AxiosRequestConfig) {
        return AvatarsApiFp(this.configuration).getFavoritedAvatars(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search and list avatars by query filters. You can only search your own or featured avatars. It is not possible as a normal user to search other peoples avatars.
     * @summary Search Avatars
     * @param {boolean} [featured] Filters on featured results.
     * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
     * @param {'me'} [user] Set to &#x60;me&#x60; for searching own avatars.
     * @param {string} [userId] Filter by UserID.
     * @param {number} [n] The number of objects to return.
     * @param {'ascending' | 'descending'} [order] 
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
     * @param {string} [notag] Tags to exclude (comma-separated).
     * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
     * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
     * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
     * @param {string} [platform] The platform the asset supports.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AvatarsApi
     */
    public searchAvatars(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', user?: 'me', userId?: string, n?: number, order?: 'ascending' | 'descending', offset?: number, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: AxiosRequestConfig) {
        return AvatarsApiFp(this.configuration).searchAvatars(featured, sort, user, userId, n, order, offset, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Switches into that avatar.
     * @summary Select Avatar
     * @param {string} avatarId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AvatarsApi
     */
    public selectAvatar(avatarId: string, options?: AxiosRequestConfig) {
        return AvatarsApiFp(this.configuration).selectAvatar(avatarId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Switches into that avatar as your fallback avatar.
     * @summary Select Fallback Avatar
     * @param {string} avatarId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AvatarsApi
     */
    public selectFallbackAvatar(avatarId: string, options?: AxiosRequestConfig) {
        return AvatarsApiFp(this.configuration).selectFallbackAvatar(avatarId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update information about a specific avatar.
     * @summary Update Avatar
     * @param {string} avatarId 
     * @param {UpdateAvatarRequest} [updateAvatarRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AvatarsApi
     */
    public updateAvatar(avatarId: string, updateAvatarRequest?: UpdateAvatarRequest, options?: AxiosRequestConfig) {
        return AvatarsApiFp(this.configuration).updateAvatar(avatarId, updateAvatarRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * EconomyApi - axios parameter creator
 * @export
 */
export const EconomyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a list of all current user subscriptions.
         * @summary Get Current Subscriptions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentSubscriptions: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user/subscription`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single License Group by given ID.
         * @summary Get License Group
         * @param {string} licenseGroupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLicenseGroup: async (licenseGroupId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'licenseGroupId' is not null or undefined
            assertParamExists('getLicenseGroup', 'licenseGroupId', licenseGroupId)
            const localVarPath = `/licenseGroups/{licenseGroupId}`
                .replace(`{${"licenseGroupId"}}`, encodeURIComponent(String(licenseGroupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single Steam transactions by ID. This returns the exact same information as `getSteamTransactions`, so no point in using this endpoint.
         * @summary Get Steam Transaction
         * @param {string} transactionId 
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getSteamTransaction: async (transactionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('getSteamTransaction', 'transactionId', transactionId)
            const localVarPath = `/Steam/transactions/{transactionId}`
                .replace(`{${"transactionId"}}`, encodeURIComponent(String(transactionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all own Steam transactions.
         * @summary List Steam Transactions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSteamTransactions: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Steam/transactions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all existing Subscriptions. For example, \"vrchatplus-monthly\" and \"vrchatplus-yearly\".
         * @summary List Subscriptions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubscriptions: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/subscriptions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EconomyApi - functional programming interface
 * @export
 */
export const EconomyApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EconomyApiAxiosParamCreator(configuration)
    return {
        /**
         * Get a list of all current user subscriptions.
         * @summary Get Current Subscriptions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCurrentSubscriptions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserSubscription>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCurrentSubscriptions(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single License Group by given ID.
         * @summary Get License Group
         * @param {string} licenseGroupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLicenseGroup(licenseGroupId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LicenseGroup>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLicenseGroup(licenseGroupId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single Steam transactions by ID. This returns the exact same information as `getSteamTransactions`, so no point in using this endpoint.
         * @summary Get Steam Transaction
         * @param {string} transactionId 
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async getSteamTransaction(transactionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Transaction>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSteamTransaction(transactionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all own Steam transactions.
         * @summary List Steam Transactions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSteamTransactions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Transaction>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSteamTransactions(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all existing Subscriptions. For example, \"vrchatplus-monthly\" and \"vrchatplus-yearly\".
         * @summary List Subscriptions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSubscriptions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Subscription>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSubscriptions(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EconomyApi - factory interface
 * @export
 */
export const EconomyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EconomyApiFp(configuration)
    return {
        /**
         * Get a list of all current user subscriptions.
         * @summary Get Current Subscriptions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentSubscriptions(options?: any): AxiosPromise<Array<UserSubscription>> {
            return localVarFp.getCurrentSubscriptions(options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single License Group by given ID.
         * @summary Get License Group
         * @param {string} licenseGroupId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLicenseGroup(licenseGroupId: string, options?: any): AxiosPromise<LicenseGroup> {
            return localVarFp.getLicenseGroup(licenseGroupId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single Steam transactions by ID. This returns the exact same information as `getSteamTransactions`, so no point in using this endpoint.
         * @summary Get Steam Transaction
         * @param {string} transactionId 
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getSteamTransaction(transactionId: string, options?: any): AxiosPromise<Transaction> {
            return localVarFp.getSteamTransaction(transactionId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all own Steam transactions.
         * @summary List Steam Transactions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSteamTransactions(options?: any): AxiosPromise<Array<Transaction>> {
            return localVarFp.getSteamTransactions(options).then((request) => request(axios, basePath));
        },
        /**
         * List all existing Subscriptions. For example, \"vrchatplus-monthly\" and \"vrchatplus-yearly\".
         * @summary List Subscriptions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubscriptions(options?: any): AxiosPromise<Array<Subscription>> {
            return localVarFp.getSubscriptions(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EconomyApi - object-oriented interface
 * @export
 * @class EconomyApi
 * @extends {BaseAPI}
 */
export class EconomyApi extends BaseAPI {
    /**
     * Get a list of all current user subscriptions.
     * @summary Get Current Subscriptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EconomyApi
     */
    public getCurrentSubscriptions(options?: AxiosRequestConfig) {
        return EconomyApiFp(this.configuration).getCurrentSubscriptions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single License Group by given ID.
     * @summary Get License Group
     * @param {string} licenseGroupId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EconomyApi
     */
    public getLicenseGroup(licenseGroupId: string, options?: AxiosRequestConfig) {
        return EconomyApiFp(this.configuration).getLicenseGroup(licenseGroupId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single Steam transactions by ID. This returns the exact same information as `getSteamTransactions`, so no point in using this endpoint.
     * @summary Get Steam Transaction
     * @param {string} transactionId 
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof EconomyApi
     */
    public getSteamTransaction(transactionId: string, options?: AxiosRequestConfig) {
        return EconomyApiFp(this.configuration).getSteamTransaction(transactionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all own Steam transactions.
     * @summary List Steam Transactions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EconomyApi
     */
    public getSteamTransactions(options?: AxiosRequestConfig) {
        return EconomyApiFp(this.configuration).getSteamTransactions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all existing Subscriptions. For example, \"vrchatplus-monthly\" and \"vrchatplus-yearly\".
     * @summary List Subscriptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EconomyApi
     */
    public getSubscriptions(options?: AxiosRequestConfig) {
        return EconomyApiFp(this.configuration).getSubscriptions(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * FavoritesApi - axios parameter creator
 * @export
 */
export const FavoritesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Add a new favorite.  Friend groups are named `group_0` through `group_3`. Avatar and World groups are named `avatars1` to `avatars4` and `worlds1` to `worlds4`.  You cannot add people whom you are not friends with to your friends list. Destroying a friendship removes the person as favorite on both sides.
         * @summary Add Favorite
         * @param {AddFavoriteRequest} [addFavoriteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addFavorite: async (addFavoriteRequest?: AddFavoriteRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/favorites`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(addFavoriteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Clear ALL contents of a specific favorite group.
         * @summary Clear Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clearFavoriteGroup: async (favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'favoriteGroupType' is not null or undefined
            assertParamExists('clearFavoriteGroup', 'favoriteGroupType', favoriteGroupType)
            // verify required parameter 'favoriteGroupName' is not null or undefined
            assertParamExists('clearFavoriteGroup', 'favoriteGroupName', favoriteGroupName)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('clearFavoriteGroup', 'userId', userId)
            const localVarPath = `/favorite/group/{favoriteGroupType}/{favoriteGroupName}/{userId}`
                .replace(`{${"favoriteGroupType"}}`, encodeURIComponent(String(favoriteGroupType)))
                .replace(`{${"favoriteGroupName"}}`, encodeURIComponent(String(favoriteGroupName)))
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Return information about a specific Favorite.
         * @summary Show Favorite
         * @param {string} favoriteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavorite: async (favoriteId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'favoriteId' is not null or undefined
            assertParamExists('getFavorite', 'favoriteId', favoriteId)
            const localVarPath = `/favorites/{favoriteId}`
                .replace(`{${"favoriteId"}}`, encodeURIComponent(String(favoriteId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetch information about a specific favorite group.
         * @summary Show Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoriteGroup: async (favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'favoriteGroupType' is not null or undefined
            assertParamExists('getFavoriteGroup', 'favoriteGroupType', favoriteGroupType)
            // verify required parameter 'favoriteGroupName' is not null or undefined
            assertParamExists('getFavoriteGroup', 'favoriteGroupName', favoriteGroupName)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getFavoriteGroup', 'userId', userId)
            const localVarPath = `/favorite/group/{favoriteGroupType}/{favoriteGroupName}/{userId}`
                .replace(`{${"favoriteGroupType"}}`, encodeURIComponent(String(favoriteGroupType)))
                .replace(`{${"favoriteGroupName"}}`, encodeURIComponent(String(favoriteGroupName)))
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Return a list of favorite groups owned by a user. Returns the same information as `getFavoriteGroups`.
         * @summary List Favorite Groups
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [ownerId] The owner of whoms favorite groups to return. Must be a UserID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoriteGroups: async (n?: number, offset?: number, ownerId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/favorite/groups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (ownerId !== undefined) {
                localVarQueryParameter['ownerId'] = ownerId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of favorites.
         * @summary List Favorites
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [type] The type of favorites to return, FavoriteType.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavorites: async (n?: number, offset?: number, type?: string, tag?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/favorites`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Remove a favorite from your favorites list.
         * @summary Remove Favorite
         * @param {string} favoriteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFavorite: async (favoriteId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'favoriteId' is not null or undefined
            assertParamExists('removeFavorite', 'favoriteId', favoriteId)
            const localVarPath = `/favorites/{favoriteId}`
                .replace(`{${"favoriteId"}}`, encodeURIComponent(String(favoriteId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update information about a specific favorite group.
         * @summary Update Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {UpdateFavoriteGroupRequest} [updateFavoriteGroupRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFavoriteGroup: async (favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, updateFavoriteGroupRequest?: UpdateFavoriteGroupRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'favoriteGroupType' is not null or undefined
            assertParamExists('updateFavoriteGroup', 'favoriteGroupType', favoriteGroupType)
            // verify required parameter 'favoriteGroupName' is not null or undefined
            assertParamExists('updateFavoriteGroup', 'favoriteGroupName', favoriteGroupName)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateFavoriteGroup', 'userId', userId)
            const localVarPath = `/favorite/group/{favoriteGroupType}/{favoriteGroupName}/{userId}`
                .replace(`{${"favoriteGroupType"}}`, encodeURIComponent(String(favoriteGroupType)))
                .replace(`{${"favoriteGroupName"}}`, encodeURIComponent(String(favoriteGroupName)))
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateFavoriteGroupRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FavoritesApi - functional programming interface
 * @export
 */
export const FavoritesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FavoritesApiAxiosParamCreator(configuration)
    return {
        /**
         * Add a new favorite.  Friend groups are named `group_0` through `group_3`. Avatar and World groups are named `avatars1` to `avatars4` and `worlds1` to `worlds4`.  You cannot add people whom you are not friends with to your friends list. Destroying a friendship removes the person as favorite on both sides.
         * @summary Add Favorite
         * @param {AddFavoriteRequest} [addFavoriteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addFavorite(addFavoriteRequest?: AddFavoriteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Favorite>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addFavorite(addFavoriteRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Clear ALL contents of a specific favorite group.
         * @summary Clear Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clearFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.clearFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Return information about a specific Favorite.
         * @summary Show Favorite
         * @param {string} favoriteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFavorite(favoriteId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Favorite>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFavorite(favoriteId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch information about a specific favorite group.
         * @summary Show Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FavoriteGroup>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Return a list of favorite groups owned by a user. Returns the same information as `getFavoriteGroups`.
         * @summary List Favorite Groups
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [ownerId] The owner of whoms favorite groups to return. Must be a UserID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFavoriteGroups(n?: number, offset?: number, ownerId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FavoriteGroup>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFavoriteGroups(n, offset, ownerId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of favorites.
         * @summary List Favorites
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [type] The type of favorites to return, FavoriteType.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFavorites(n?: number, offset?: number, type?: string, tag?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Favorite>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFavorites(n, offset, type, tag, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Remove a favorite from your favorites list.
         * @summary Remove Favorite
         * @param {string} favoriteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeFavorite(favoriteId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeFavorite(favoriteId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update information about a specific favorite group.
         * @summary Update Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {UpdateFavoriteGroupRequest} [updateFavoriteGroupRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, updateFavoriteGroupRequest?: UpdateFavoriteGroupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, updateFavoriteGroupRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FavoritesApi - factory interface
 * @export
 */
export const FavoritesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FavoritesApiFp(configuration)
    return {
        /**
         * Add a new favorite.  Friend groups are named `group_0` through `group_3`. Avatar and World groups are named `avatars1` to `avatars4` and `worlds1` to `worlds4`.  You cannot add people whom you are not friends with to your friends list. Destroying a friendship removes the person as favorite on both sides.
         * @summary Add Favorite
         * @param {AddFavoriteRequest} [addFavoriteRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addFavorite(addFavoriteRequest?: AddFavoriteRequest, options?: any): AxiosPromise<Favorite> {
            return localVarFp.addFavorite(addFavoriteRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Clear ALL contents of a specific favorite group.
         * @summary Clear Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clearFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, options?: any): AxiosPromise<Success> {
            return localVarFp.clearFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Return information about a specific Favorite.
         * @summary Show Favorite
         * @param {string} favoriteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavorite(favoriteId: string, options?: any): AxiosPromise<Favorite> {
            return localVarFp.getFavorite(favoriteId, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch information about a specific favorite group.
         * @summary Show Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, options?: any): AxiosPromise<FavoriteGroup> {
            return localVarFp.getFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Return a list of favorite groups owned by a user. Returns the same information as `getFavoriteGroups`.
         * @summary List Favorite Groups
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [ownerId] The owner of whoms favorite groups to return. Must be a UserID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoriteGroups(n?: number, offset?: number, ownerId?: string, options?: any): AxiosPromise<Array<FavoriteGroup>> {
            return localVarFp.getFavoriteGroups(n, offset, ownerId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of favorites.
         * @summary List Favorites
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [type] The type of favorites to return, FavoriteType.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavorites(n?: number, offset?: number, type?: string, tag?: string, options?: any): AxiosPromise<Array<Favorite>> {
            return localVarFp.getFavorites(n, offset, type, tag, options).then((request) => request(axios, basePath));
        },
        /**
         * Remove a favorite from your favorites list.
         * @summary Remove Favorite
         * @param {string} favoriteId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFavorite(favoriteId: string, options?: any): AxiosPromise<Success> {
            return localVarFp.removeFavorite(favoriteId, options).then((request) => request(axios, basePath));
        },
        /**
         * Update information about a specific favorite group.
         * @summary Update Favorite Group
         * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
         * @param {string} favoriteGroupName 
         * @param {string} userId 
         * @param {UpdateFavoriteGroupRequest} [updateFavoriteGroupRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, updateFavoriteGroupRequest?: UpdateFavoriteGroupRequest, options?: any): AxiosPromise<void> {
            return localVarFp.updateFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, updateFavoriteGroupRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FavoritesApi - object-oriented interface
 * @export
 * @class FavoritesApi
 * @extends {BaseAPI}
 */
export class FavoritesApi extends BaseAPI {
    /**
     * Add a new favorite.  Friend groups are named `group_0` through `group_3`. Avatar and World groups are named `avatars1` to `avatars4` and `worlds1` to `worlds4`.  You cannot add people whom you are not friends with to your friends list. Destroying a friendship removes the person as favorite on both sides.
     * @summary Add Favorite
     * @param {AddFavoriteRequest} [addFavoriteRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoritesApi
     */
    public addFavorite(addFavoriteRequest?: AddFavoriteRequest, options?: AxiosRequestConfig) {
        return FavoritesApiFp(this.configuration).addFavorite(addFavoriteRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Clear ALL contents of a specific favorite group.
     * @summary Clear Favorite Group
     * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
     * @param {string} favoriteGroupName 
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoritesApi
     */
    public clearFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, options?: AxiosRequestConfig) {
        return FavoritesApiFp(this.configuration).clearFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Return information about a specific Favorite.
     * @summary Show Favorite
     * @param {string} favoriteId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoritesApi
     */
    public getFavorite(favoriteId: string, options?: AxiosRequestConfig) {
        return FavoritesApiFp(this.configuration).getFavorite(favoriteId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch information about a specific favorite group.
     * @summary Show Favorite Group
     * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
     * @param {string} favoriteGroupName 
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoritesApi
     */
    public getFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, options?: AxiosRequestConfig) {
        return FavoritesApiFp(this.configuration).getFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Return a list of favorite groups owned by a user. Returns the same information as `getFavoriteGroups`.
     * @summary List Favorite Groups
     * @param {number} [n] The number of objects to return.
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {string} [ownerId] The owner of whoms favorite groups to return. Must be a UserID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoritesApi
     */
    public getFavoriteGroups(n?: number, offset?: number, ownerId?: string, options?: AxiosRequestConfig) {
        return FavoritesApiFp(this.configuration).getFavoriteGroups(n, offset, ownerId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of favorites.
     * @summary List Favorites
     * @param {number} [n] The number of objects to return.
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {string} [type] The type of favorites to return, FavoriteType.
     * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoritesApi
     */
    public getFavorites(n?: number, offset?: number, type?: string, tag?: string, options?: AxiosRequestConfig) {
        return FavoritesApiFp(this.configuration).getFavorites(n, offset, type, tag, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Remove a favorite from your favorites list.
     * @summary Remove Favorite
     * @param {string} favoriteId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoritesApi
     */
    public removeFavorite(favoriteId: string, options?: AxiosRequestConfig) {
        return FavoritesApiFp(this.configuration).removeFavorite(favoriteId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update information about a specific favorite group.
     * @summary Update Favorite Group
     * @param {'world' | 'friend' | 'avatar'} favoriteGroupType The type of group to fetch, must be a valid FavoriteType.
     * @param {string} favoriteGroupName 
     * @param {string} userId 
     * @param {UpdateFavoriteGroupRequest} [updateFavoriteGroupRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FavoritesApi
     */
    public updateFavoriteGroup(favoriteGroupType: 'world' | 'friend' | 'avatar', favoriteGroupName: string, userId: string, updateFavoriteGroupRequest?: UpdateFavoriteGroupRequest, options?: AxiosRequestConfig) {
        return FavoritesApiFp(this.configuration).updateFavoriteGroup(favoriteGroupType, favoriteGroupName, userId, updateFavoriteGroupRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * FilesApi - axios parameter creator
 * @export
 */
export const FilesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new File object
         * @summary Create File
         * @param {CreateFileRequest} [createFileRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFile: async (createFileRequest?: CreateFileRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/file`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createFileRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.
         * @summary Create File Version
         * @param {string} fileId 
         * @param {CreateFileVersionRequest} [createFileVersionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFileVersion: async (fileId: string, createFileVersionRequest?: CreateFileVersionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('createFileVersion', 'fileId', fileId)
            const localVarPath = `/file/{fileId}`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createFileVersionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a File object.
         * @summary Delete File
         * @param {string} fileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFile: async (fileId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('deleteFile', 'fileId', fileId)
            const localVarPath = `/file/{fileId}`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a specific version of a file. You can only delete the latest version.
         * @summary Delete File Version
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFileVersion: async (fileId: string, versionId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('deleteFileVersion', 'fileId', fileId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('deleteFileVersion', 'versionId', versionId)
            const localVarPath = `/file/{fileId}/{versionId}`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)))
                .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Downloads the file with the provided version number.  **Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.  **Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.
         * @summary Download File Version
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadFileVersion: async (fileId: string, versionId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('downloadFileVersion', 'fileId', fileId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('downloadFileVersion', 'versionId', versionId)
            const localVarPath = `/file/{fileId}/{versionId}`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)))
                .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Finish an upload of a FileData. This will mark it as \"complete\". After uploading the `file` for Avatars and Worlds you then have to upload a `signature` file.
         * @summary Finish FileData Upload
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {FinishFileDataUploadRequest} [finishFileDataUploadRequest] Please see documentation on ETag\&#39;s: [https://teppen.io/2018/06/23/aws_s3_etags/](https://teppen.io/2018/06/23/aws_s3_etags/)  ETag\&#39;s should NOT be present when uploading a &#x60;signature&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        finishFileDataUpload: async (fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', finishFileDataUploadRequest?: FinishFileDataUploadRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('finishFileDataUpload', 'fileId', fileId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('finishFileDataUpload', 'versionId', versionId)
            // verify required parameter 'fileType' is not null or undefined
            assertParamExists('finishFileDataUpload', 'fileType', fileType)
            const localVarPath = `/file/{fileId}/{versionId}/{fileType}/finish`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)))
                .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId)))
                .replace(`{${"fileType"}}`, encodeURIComponent(String(fileType)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(finishFileDataUploadRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Shows general information about the \"File\" object. Each File can have several \"Version\"\'s, and each Version can have multiple real files or \"Data\" blobs.
         * @summary Show File
         * @param {string} fileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFile: async (fileId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getFile', 'fileId', fileId)
            const localVarPath = `/file/{fileId}`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the upload status for file upload. Can currently only be accessed when `status` is `waiting`. Trying to access it on a file version already uploaded currently times out.
         * @summary Check FileData Upload Status
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFileDataUploadStatus: async (fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('getFileDataUploadStatus', 'fileId', fileId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('getFileDataUploadStatus', 'versionId', versionId)
            // verify required parameter 'fileType' is not null or undefined
            assertParamExists('getFileDataUploadStatus', 'fileType', fileType)
            const localVarPath = `/file/{fileId}/{versionId}/{fileType}/status`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)))
                .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId)))
                .replace(`{${"fileType"}}`, encodeURIComponent(String(fileType)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of files
         * @summary List Files
         * @param {string} [tag] Tag, for example \&quot;icon\&quot; or \&quot;gallery\&quot;, not included by default.
         * @param {string} [userId] UserID, will always generate a 500 permission error.
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFiles: async (tag?: string, userId?: string, n?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/files`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each `partNumber`. Please see AWS\'s REST documentation on \"PUT Object to S3\" on how to upload. Once all parts has been uploaded, proceed to `/finish` endpoint.  **Note:** `nextPartNumber` seems like it is always ignored. Despite it returning 0, first partNumber is always 1.
         * @summary Start FileData Upload
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {number} [partNumber] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startFileDataUpload: async (fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', partNumber?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileId' is not null or undefined
            assertParamExists('startFileDataUpload', 'fileId', fileId)
            // verify required parameter 'versionId' is not null or undefined
            assertParamExists('startFileDataUpload', 'versionId', versionId)
            // verify required parameter 'fileType' is not null or undefined
            assertParamExists('startFileDataUpload', 'fileType', fileType)
            const localVarPath = `/file/{fileId}/{versionId}/{fileType}/start`
                .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)))
                .replace(`{${"versionId"}}`, encodeURIComponent(String(versionId)))
                .replace(`{${"fileType"}}`, encodeURIComponent(String(fileType)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (partNumber !== undefined) {
                localVarQueryParameter['partNumber'] = partNumber;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FilesApi - functional programming interface
 * @export
 */
export const FilesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FilesApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new File object
         * @summary Create File
         * @param {CreateFileRequest} [createFileRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createFile(createFileRequest?: CreateFileRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFile(createFileRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.
         * @summary Create File Version
         * @param {string} fileId 
         * @param {CreateFileVersionRequest} [createFileVersionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createFileVersion(fileId: string, createFileVersionRequest?: CreateFileVersionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createFileVersion(fileId, createFileVersionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a File object.
         * @summary Delete File
         * @param {string} fileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFile(fileId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFile(fileId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a specific version of a file. You can only delete the latest version.
         * @summary Delete File Version
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFileVersion(fileId: string, versionId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFileVersion(fileId, versionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Downloads the file with the provided version number.  **Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.  **Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.
         * @summary Download File Version
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downloadFileVersion(fileId: string, versionId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.downloadFileVersion(fileId, versionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Finish an upload of a FileData. This will mark it as \"complete\". After uploading the `file` for Avatars and Worlds you then have to upload a `signature` file.
         * @summary Finish FileData Upload
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {FinishFileDataUploadRequest} [finishFileDataUploadRequest] Please see documentation on ETag\&#39;s: [https://teppen.io/2018/06/23/aws_s3_etags/](https://teppen.io/2018/06/23/aws_s3_etags/)  ETag\&#39;s should NOT be present when uploading a &#x60;signature&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async finishFileDataUpload(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', finishFileDataUploadRequest?: FinishFileDataUploadRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.finishFileDataUpload(fileId, versionId, fileType, finishFileDataUploadRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Shows general information about the \"File\" object. Each File can have several \"Version\"\'s, and each Version can have multiple real files or \"Data\" blobs.
         * @summary Show File
         * @param {string} fileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFile(fileId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFile(fileId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves the upload status for file upload. Can currently only be accessed when `status` is `waiting`. Trying to access it on a file version already uploaded currently times out.
         * @summary Check FileData Upload Status
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFileDataUploadStatus(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileVersionUploadStatus>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFileDataUploadStatus(fileId, versionId, fileType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of files
         * @summary List Files
         * @param {string} [tag] Tag, for example \&quot;icon\&quot; or \&quot;gallery\&quot;, not included by default.
         * @param {string} [userId] UserID, will always generate a 500 permission error.
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFiles(tag?: string, userId?: string, n?: number, offset?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<any>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFiles(tag, userId, n, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each `partNumber`. Please see AWS\'s REST documentation on \"PUT Object to S3\" on how to upload. Once all parts has been uploaded, proceed to `/finish` endpoint.  **Note:** `nextPartNumber` seems like it is always ignored. Despite it returning 0, first partNumber is always 1.
         * @summary Start FileData Upload
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {number} [partNumber] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startFileDataUpload(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', partNumber?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileUploadURL>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startFileDataUpload(fileId, versionId, fileType, partNumber, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FilesApi - factory interface
 * @export
 */
export const FilesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FilesApiFp(configuration)
    return {
        /**
         * Creates a new File object
         * @summary Create File
         * @param {CreateFileRequest} [createFileRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFile(createFileRequest?: CreateFileRequest, options?: any): AxiosPromise<any> {
            return localVarFp.createFile(createFileRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.
         * @summary Create File Version
         * @param {string} fileId 
         * @param {CreateFileVersionRequest} [createFileVersionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createFileVersion(fileId: string, createFileVersionRequest?: CreateFileVersionRequest, options?: any): AxiosPromise<any> {
            return localVarFp.createFileVersion(fileId, createFileVersionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a File object.
         * @summary Delete File
         * @param {string} fileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFile(fileId: string, options?: any): AxiosPromise<Success> {
            return localVarFp.deleteFile(fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a specific version of a file. You can only delete the latest version.
         * @summary Delete File Version
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFileVersion(fileId: string, versionId: number, options?: any): AxiosPromise<any> {
            return localVarFp.deleteFileVersion(fileId, versionId, options).then((request) => request(axios, basePath));
        },
        /**
         * Downloads the file with the provided version number.  **Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.  **Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.
         * @summary Download File Version
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadFileVersion(fileId: string, versionId: number, options?: any): AxiosPromise<void> {
            return localVarFp.downloadFileVersion(fileId, versionId, options).then((request) => request(axios, basePath));
        },
        /**
         * Finish an upload of a FileData. This will mark it as \"complete\". After uploading the `file` for Avatars and Worlds you then have to upload a `signature` file.
         * @summary Finish FileData Upload
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {FinishFileDataUploadRequest} [finishFileDataUploadRequest] Please see documentation on ETag\&#39;s: [https://teppen.io/2018/06/23/aws_s3_etags/](https://teppen.io/2018/06/23/aws_s3_etags/)  ETag\&#39;s should NOT be present when uploading a &#x60;signature&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        finishFileDataUpload(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', finishFileDataUploadRequest?: FinishFileDataUploadRequest, options?: any): AxiosPromise<any> {
            return localVarFp.finishFileDataUpload(fileId, versionId, fileType, finishFileDataUploadRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Shows general information about the \"File\" object. Each File can have several \"Version\"\'s, and each Version can have multiple real files or \"Data\" blobs.
         * @summary Show File
         * @param {string} fileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFile(fileId: string, options?: any): AxiosPromise<any> {
            return localVarFp.getFile(fileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the upload status for file upload. Can currently only be accessed when `status` is `waiting`. Trying to access it on a file version already uploaded currently times out.
         * @summary Check FileData Upload Status
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFileDataUploadStatus(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', options?: any): AxiosPromise<FileVersionUploadStatus> {
            return localVarFp.getFileDataUploadStatus(fileId, versionId, fileType, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of files
         * @summary List Files
         * @param {string} [tag] Tag, for example \&quot;icon\&quot; or \&quot;gallery\&quot;, not included by default.
         * @param {string} [userId] UserID, will always generate a 500 permission error.
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFiles(tag?: string, userId?: string, n?: number, offset?: number, options?: any): AxiosPromise<Array<any>> {
            return localVarFp.getFiles(tag, userId, n, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each `partNumber`. Please see AWS\'s REST documentation on \"PUT Object to S3\" on how to upload. Once all parts has been uploaded, proceed to `/finish` endpoint.  **Note:** `nextPartNumber` seems like it is always ignored. Despite it returning 0, first partNumber is always 1.
         * @summary Start FileData Upload
         * @param {string} fileId 
         * @param {number} versionId 
         * @param {'file' | 'signature' | 'delta'} fileType 
         * @param {number} [partNumber] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startFileDataUpload(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', partNumber?: number, options?: any): AxiosPromise<FileUploadURL> {
            return localVarFp.startFileDataUpload(fileId, versionId, fileType, partNumber, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FilesApi - object-oriented interface
 * @export
 * @class FilesApi
 * @extends {BaseAPI}
 */
export class FilesApi extends BaseAPI {
    /**
     * Creates a new File object
     * @summary Create File
     * @param {CreateFileRequest} [createFileRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createFile(createFileRequest?: CreateFileRequest, options?: AxiosRequestConfig) {
        return FilesApiFp(this.configuration).createFile(createFileRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.
     * @summary Create File Version
     * @param {string} fileId 
     * @param {CreateFileVersionRequest} [createFileVersionRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public createFileVersion(fileId: string, createFileVersionRequest?: CreateFileVersionRequest, options?: AxiosRequestConfig) {
        return FilesApiFp(this.configuration).createFileVersion(fileId, createFileVersionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a File object.
     * @summary Delete File
     * @param {string} fileId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public deleteFile(fileId: string, options?: AxiosRequestConfig) {
        return FilesApiFp(this.configuration).deleteFile(fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a specific version of a file. You can only delete the latest version.
     * @summary Delete File Version
     * @param {string} fileId 
     * @param {number} versionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public deleteFileVersion(fileId: string, versionId: number, options?: AxiosRequestConfig) {
        return FilesApiFp(this.configuration).deleteFileVersion(fileId, versionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Downloads the file with the provided version number.  **Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.  **Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.
     * @summary Download File Version
     * @param {string} fileId 
     * @param {number} versionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public downloadFileVersion(fileId: string, versionId: number, options?: AxiosRequestConfig) {
        return FilesApiFp(this.configuration).downloadFileVersion(fileId, versionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Finish an upload of a FileData. This will mark it as \"complete\". After uploading the `file` for Avatars and Worlds you then have to upload a `signature` file.
     * @summary Finish FileData Upload
     * @param {string} fileId 
     * @param {number} versionId 
     * @param {'file' | 'signature' | 'delta'} fileType 
     * @param {FinishFileDataUploadRequest} [finishFileDataUploadRequest] Please see documentation on ETag\&#39;s: [https://teppen.io/2018/06/23/aws_s3_etags/](https://teppen.io/2018/06/23/aws_s3_etags/)  ETag\&#39;s should NOT be present when uploading a &#x60;signature&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public finishFileDataUpload(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', finishFileDataUploadRequest?: FinishFileDataUploadRequest, options?: AxiosRequestConfig) {
        return FilesApiFp(this.configuration).finishFileDataUpload(fileId, versionId, fileType, finishFileDataUploadRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Shows general information about the \"File\" object. Each File can have several \"Version\"\'s, and each Version can have multiple real files or \"Data\" blobs.
     * @summary Show File
     * @param {string} fileId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFile(fileId: string, options?: AxiosRequestConfig) {
        return FilesApiFp(this.configuration).getFile(fileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the upload status for file upload. Can currently only be accessed when `status` is `waiting`. Trying to access it on a file version already uploaded currently times out.
     * @summary Check FileData Upload Status
     * @param {string} fileId 
     * @param {number} versionId 
     * @param {'file' | 'signature' | 'delta'} fileType 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFileDataUploadStatus(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', options?: AxiosRequestConfig) {
        return FilesApiFp(this.configuration).getFileDataUploadStatus(fileId, versionId, fileType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of files
     * @summary List Files
     * @param {string} [tag] Tag, for example \&quot;icon\&quot; or \&quot;gallery\&quot;, not included by default.
     * @param {string} [userId] UserID, will always generate a 500 permission error.
     * @param {number} [n] The number of objects to return.
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFiles(tag?: string, userId?: string, n?: number, offset?: number, options?: AxiosRequestConfig) {
        return FilesApiFp(this.configuration).getFiles(tag, userId, n, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each `partNumber`. Please see AWS\'s REST documentation on \"PUT Object to S3\" on how to upload. Once all parts has been uploaded, proceed to `/finish` endpoint.  **Note:** `nextPartNumber` seems like it is always ignored. Despite it returning 0, first partNumber is always 1.
     * @summary Start FileData Upload
     * @param {string} fileId 
     * @param {number} versionId 
     * @param {'file' | 'signature' | 'delta'} fileType 
     * @param {number} [partNumber] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public startFileDataUpload(fileId: string, versionId: number, fileType: 'file' | 'signature' | 'delta', partNumber?: number, options?: AxiosRequestConfig) {
        return FilesApiFp(this.configuration).startFileDataUpload(fileId, versionId, fileType, partNumber, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * FriendsApi - axios parameter creator
 * @export
 */
export const FriendsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes an outgoing pending friend request to another user. To delete an incoming friend request, use the `deleteNotification` endpoint instead.
         * @summary Delete Friend Request
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFriendRequest: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('deleteFriendRequest', 'userId', userId)
            const localVarPath = `/user/{userId}/friendRequest`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Send a friend request to another user.
         * @summary Send Friend Request
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        friend: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('friend', 'userId', userId)
            const localVarPath = `/user/{userId}/friendRequest`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve if the user is currently a friend with a given user, if they have an outgoing friend request, and if they have an incoming friend request. The proper way to receive and accept friend request is by checking if the user has an incoming `Notification` of type `friendRequest`, and then accepting that notification.
         * @summary Check Friend Status
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFriendStatus: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getFriendStatus', 'userId', userId)
            const localVarPath = `/user/{userId}/friendStatus`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List information about friends.
         * @summary List Friends
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {number} [n] The number of objects to return.
         * @param {boolean} [offline] Returns *only* offline users if true, returns only online and active users if false
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFriends: async (offset?: number, n?: number, offline?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user/friends`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (offline !== undefined) {
                localVarQueryParameter['offline'] = offline;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Unfriend a user by ID.
         * @summary Unfriend
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unfriend: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('unfriend', 'userId', userId)
            const localVarPath = `/auth/user/friends/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FriendsApi - functional programming interface
 * @export
 */
export const FriendsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FriendsApiAxiosParamCreator(configuration)
    return {
        /**
         * Deletes an outgoing pending friend request to another user. To delete an incoming friend request, use the `deleteNotification` endpoint instead.
         * @summary Delete Friend Request
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFriendRequest(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteFriendRequest(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Send a friend request to another user.
         * @summary Send Friend Request
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async friend(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.friend(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve if the user is currently a friend with a given user, if they have an outgoing friend request, and if they have an incoming friend request. The proper way to receive and accept friend request is by checking if the user has an incoming `Notification` of type `friendRequest`, and then accepting that notification.
         * @summary Check Friend Status
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFriendStatus(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FriendStatus>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFriendStatus(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List information about friends.
         * @summary List Friends
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {number} [n] The number of objects to return.
         * @param {boolean} [offline] Returns *only* offline users if true, returns only online and active users if false
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFriends(offset?: number, n?: number, offline?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LimitedUser>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFriends(offset, n, offline, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Unfriend a user by ID.
         * @summary Unfriend
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unfriend(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unfriend(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FriendsApi - factory interface
 * @export
 */
export const FriendsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FriendsApiFp(configuration)
    return {
        /**
         * Deletes an outgoing pending friend request to another user. To delete an incoming friend request, use the `deleteNotification` endpoint instead.
         * @summary Delete Friend Request
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFriendRequest(userId: string, options?: any): AxiosPromise<Success> {
            return localVarFp.deleteFriendRequest(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Send a friend request to another user.
         * @summary Send Friend Request
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        friend(userId: string, options?: any): AxiosPromise<Notification> {
            return localVarFp.friend(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve if the user is currently a friend with a given user, if they have an outgoing friend request, and if they have an incoming friend request. The proper way to receive and accept friend request is by checking if the user has an incoming `Notification` of type `friendRequest`, and then accepting that notification.
         * @summary Check Friend Status
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFriendStatus(userId: string, options?: any): AxiosPromise<FriendStatus> {
            return localVarFp.getFriendStatus(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * List information about friends.
         * @summary List Friends
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {number} [n] The number of objects to return.
         * @param {boolean} [offline] Returns *only* offline users if true, returns only online and active users if false
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFriends(offset?: number, n?: number, offline?: boolean, options?: any): AxiosPromise<Array<LimitedUser>> {
            return localVarFp.getFriends(offset, n, offline, options).then((request) => request(axios, basePath));
        },
        /**
         * Unfriend a user by ID.
         * @summary Unfriend
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unfriend(userId: string, options?: any): AxiosPromise<Success> {
            return localVarFp.unfriend(userId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FriendsApi - object-oriented interface
 * @export
 * @class FriendsApi
 * @extends {BaseAPI}
 */
export class FriendsApi extends BaseAPI {
    /**
     * Deletes an outgoing pending friend request to another user. To delete an incoming friend request, use the `deleteNotification` endpoint instead.
     * @summary Delete Friend Request
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FriendsApi
     */
    public deleteFriendRequest(userId: string, options?: AxiosRequestConfig) {
        return FriendsApiFp(this.configuration).deleteFriendRequest(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Send a friend request to another user.
     * @summary Send Friend Request
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FriendsApi
     */
    public friend(userId: string, options?: AxiosRequestConfig) {
        return FriendsApiFp(this.configuration).friend(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve if the user is currently a friend with a given user, if they have an outgoing friend request, and if they have an incoming friend request. The proper way to receive and accept friend request is by checking if the user has an incoming `Notification` of type `friendRequest`, and then accepting that notification.
     * @summary Check Friend Status
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FriendsApi
     */
    public getFriendStatus(userId: string, options?: AxiosRequestConfig) {
        return FriendsApiFp(this.configuration).getFriendStatus(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List information about friends.
     * @summary List Friends
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {number} [n] The number of objects to return.
     * @param {boolean} [offline] Returns *only* offline users if true, returns only online and active users if false
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FriendsApi
     */
    public getFriends(offset?: number, n?: number, offline?: boolean, options?: AxiosRequestConfig) {
        return FriendsApiFp(this.configuration).getFriends(offset, n, offline, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unfriend a user by ID.
     * @summary Unfriend
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FriendsApi
     */
    public unfriend(userId: string, options?: AxiosRequestConfig) {
        return FriendsApiFp(this.configuration).unfriend(userId, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * InstancesApi - axios parameter creator
 * @export
 */
export const InstancesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns an instance. Please read [Instances Tutorial](https://vrchatapi.github.io/tutorials/instances/) for more information on Instances.  If an invalid instanceId is provided, this endpoint will simply return \"null\"!
         * @summary Get Instance
         * @param {string} worldId 
         * @param {string} instanceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInstance: async (worldId: string, instanceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('getInstance', 'worldId', worldId)
            // verify required parameter 'instanceId' is not null or undefined
            assertParamExists('getInstance', 'instanceId', instanceId)
            const localVarPath = `/instances/{worldId}:{instanceId}`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)))
                .replace(`{${"instanceId"}}`, encodeURIComponent(String(instanceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns an instance short name.
         * @summary Get Instance Short Name
         * @param {string} worldId 
         * @param {string} instanceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getShortName: async (worldId: string, instanceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('getShortName', 'worldId', worldId)
            // verify required parameter 'instanceId' is not null or undefined
            assertParamExists('getShortName', 'instanceId', instanceId)
            const localVarPath = `/instances/{worldId}:{instanceId}/shortName`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)))
                .replace(`{${"instanceId"}}`, encodeURIComponent(String(instanceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sends an invite to the instance to yourself.
         * @summary Send Self Invite
         * @param {string} worldId 
         * @param {string} instanceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendSelfInvite: async (worldId: string, instanceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('sendSelfInvite', 'worldId', worldId)
            // verify required parameter 'instanceId' is not null or undefined
            assertParamExists('sendSelfInvite', 'instanceId', instanceId)
            const localVarPath = `/instances/{worldId}:{instanceId}/invite`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)))
                .replace(`{${"instanceId"}}`, encodeURIComponent(String(instanceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * InstancesApi - functional programming interface
 * @export
 */
export const InstancesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InstancesApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns an instance. Please read [Instances Tutorial](https://vrchatapi.github.io/tutorials/instances/) for more information on Instances.  If an invalid instanceId is provided, this endpoint will simply return \"null\"!
         * @summary Get Instance
         * @param {string} worldId 
         * @param {string} instanceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInstance(worldId: string, instanceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Instance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInstance(worldId, instanceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns an instance short name.
         * @summary Get Instance Short Name
         * @param {string} worldId 
         * @param {string} instanceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getShortName(worldId: string, instanceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getShortName(worldId, instanceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Sends an invite to the instance to yourself.
         * @summary Send Self Invite
         * @param {string} worldId 
         * @param {string} instanceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendSelfInvite(worldId: string, instanceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendSelfInvite(worldId, instanceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * InstancesApi - factory interface
 * @export
 */
export const InstancesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InstancesApiFp(configuration)
    return {
        /**
         * Returns an instance. Please read [Instances Tutorial](https://vrchatapi.github.io/tutorials/instances/) for more information on Instances.  If an invalid instanceId is provided, this endpoint will simply return \"null\"!
         * @summary Get Instance
         * @param {string} worldId 
         * @param {string} instanceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInstance(worldId: string, instanceId: string, options?: any): AxiosPromise<Instance> {
            return localVarFp.getInstance(worldId, instanceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns an instance short name.
         * @summary Get Instance Short Name
         * @param {string} worldId 
         * @param {string} instanceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getShortName(worldId: string, instanceId: string, options?: any): AxiosPromise<string> {
            return localVarFp.getShortName(worldId, instanceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends an invite to the instance to yourself.
         * @summary Send Self Invite
         * @param {string} worldId 
         * @param {string} instanceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendSelfInvite(worldId: string, instanceId: string, options?: any): AxiosPromise<Success> {
            return localVarFp.sendSelfInvite(worldId, instanceId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * InstancesApi - object-oriented interface
 * @export
 * @class InstancesApi
 * @extends {BaseAPI}
 */
export class InstancesApi extends BaseAPI {
    /**
     * Returns an instance. Please read [Instances Tutorial](https://vrchatapi.github.io/tutorials/instances/) for more information on Instances.  If an invalid instanceId is provided, this endpoint will simply return \"null\"!
     * @summary Get Instance
     * @param {string} worldId 
     * @param {string} instanceId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    public getInstance(worldId: string, instanceId: string, options?: AxiosRequestConfig) {
        return InstancesApiFp(this.configuration).getInstance(worldId, instanceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns an instance short name.
     * @summary Get Instance Short Name
     * @param {string} worldId 
     * @param {string} instanceId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    public getShortName(worldId: string, instanceId: string, options?: AxiosRequestConfig) {
        return InstancesApiFp(this.configuration).getShortName(worldId, instanceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends an invite to the instance to yourself.
     * @summary Send Self Invite
     * @param {string} worldId 
     * @param {string} instanceId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    public sendSelfInvite(worldId: string, instanceId: string, options?: AxiosRequestConfig) {
        return InstancesApiFp(this.configuration).sendSelfInvite(worldId, instanceId, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * InviteApi - axios parameter creator
 * @export
 */
export const InviteApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a single Invite Message. This returns the exact same information but less than `getInviteMessages`. Admin Credentials are required to view messages of other users!  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
         * @summary Get Invite Message
         * @param {string} userId 
         * @param {'message' | 'response' | 'request' | 'requestResponse'} messageType 
         * @param {number} slot 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInviteMessage: async (userId: string, messageType: 'message' | 'response' | 'request' | 'requestResponse', slot: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getInviteMessage', 'userId', userId)
            // verify required parameter 'messageType' is not null or undefined
            assertParamExists('getInviteMessage', 'messageType', messageType)
            // verify required parameter 'slot' is not null or undefined
            assertParamExists('getInviteMessage', 'slot', slot)
            const localVarPath = `/message/{userId}/{messageType}/{slot}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"messageType"}}`, encodeURIComponent(String(messageType)))
                .replace(`{${"slot"}}`, encodeURIComponent(String(slot)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all the users Invite Messages. Admin Credentials are required to view messages of other users!  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
         * @summary List Invite Messages
         * @param {string} userId 
         * @param {'message' | 'response' | 'request' | 'requestResponse'} messageType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInviteMessages: async (userId: string, messageType: 'message' | 'response' | 'request' | 'requestResponse', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getInviteMessages', 'userId', userId)
            // verify required parameter 'messageType' is not null or undefined
            assertParamExists('getInviteMessages', 'messageType', messageType)
            const localVarPath = `/message/{userId}/{messageType}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"messageType"}}`, encodeURIComponent(String(messageType)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sends an invite to a user. Returns the Notification of type `invite` that was sent.
         * @summary Invite User
         * @param {string} userId 
         * @param {InviteRequest} [inviteRequest] Slot number of the Invite Message to use when inviting a user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inviteUser: async (userId: string, inviteRequest?: InviteRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('inviteUser', 'userId', userId)
            const localVarPath = `/invite/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inviteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Requests an invite from a user. Returns the Notification of type `requestInvite` that was sent.
         * @summary Request Invite
         * @param {string} userId 
         * @param {RequestInviteRequest} [requestInviteRequest] Slot number of the Request Message to use when request an invite.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestInvite: async (userId: string, requestInviteRequest?: RequestInviteRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('requestInvite', 'userId', userId)
            const localVarPath = `/requestInvite/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestInviteRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Resets a single Invite Message back to its original message, and then returns a list of all of them. Admin Credentials are required to update messages of other users!  Resetting a message respects the rate-limit, so it is not possible to reset within the 60 minutes countdown. Resetting it does however not set the rate-limit to 60 like when editing it. It is possible to edit it right after resetting it. Trying to edit a message before the cooldown timer expires results in a 429 \"Too Fast Error\".  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite  The DELETE endpoint does not have/require any request body.
         * @summary Reset Invite Message
         * @param {string} userId 
         * @param {'message' | 'response' | 'request' | 'requestResponse'} messageType 
         * @param {number} slot 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetInviteMessage: async (userId: string, messageType: 'message' | 'response' | 'request' | 'requestResponse', slot: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('resetInviteMessage', 'userId', userId)
            // verify required parameter 'messageType' is not null or undefined
            assertParamExists('resetInviteMessage', 'messageType', messageType)
            // verify required parameter 'slot' is not null or undefined
            assertParamExists('resetInviteMessage', 'slot', slot)
            const localVarPath = `/message/{userId}/{messageType}/{slot}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"messageType"}}`, encodeURIComponent(String(messageType)))
                .replace(`{${"slot"}}`, encodeURIComponent(String(slot)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Respond to an invite request by sending a world invite to the requesting user. `:notificationId` is the ID of the requesting notification.
         * @summary Respond Invite
         * @param {string} notificationId 
         * @param {InviteResponse} [inviteResponse] Slot number of the Response Message to use when responding to a user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        respondInvite: async (notificationId: string, inviteResponse?: InviteResponse, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'notificationId' is not null or undefined
            assertParamExists('respondInvite', 'notificationId', notificationId)
            const localVarPath = `/invite/{notificationId}/response`
                .replace(`{${"notificationId"}}`, encodeURIComponent(String(notificationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inviteResponse, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a single Invite Message and then returns a list of all of them. Admin Credentials are required to update messages of other users!  Updating a message automatically sets the cooldown timer to 60 minutes. Trying to edit a message before the cooldown timer expires results in a 429 \"Too Fast Error\".  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
         * @summary Update Invite Message
         * @param {string} userId 
         * @param {'message' | 'response' | 'request' | 'requestResponse'} messageType 
         * @param {number} slot 
         * @param {UpdateInviteMessageRequest} [updateInviteMessageRequest] Message of what to set the invite message to.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInviteMessage: async (userId: string, messageType: 'message' | 'response' | 'request' | 'requestResponse', slot: number, updateInviteMessageRequest?: UpdateInviteMessageRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateInviteMessage', 'userId', userId)
            // verify required parameter 'messageType' is not null or undefined
            assertParamExists('updateInviteMessage', 'messageType', messageType)
            // verify required parameter 'slot' is not null or undefined
            assertParamExists('updateInviteMessage', 'slot', slot)
            const localVarPath = `/message/{userId}/{messageType}/{slot}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"messageType"}}`, encodeURIComponent(String(messageType)))
                .replace(`{${"slot"}}`, encodeURIComponent(String(slot)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateInviteMessageRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * InviteApi - functional programming interface
 * @export
 */
export const InviteApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InviteApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a single Invite Message. This returns the exact same information but less than `getInviteMessages`. Admin Credentials are required to view messages of other users!  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
         * @summary Get Invite Message
         * @param {string} userId 
         * @param {'message' | 'response' | 'request' | 'requestResponse'} messageType 
         * @param {number} slot 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInviteMessage(userId: string, messageType: 'message' | 'response' | 'request' | 'requestResponse', slot: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InviteMessage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInviteMessage(userId, messageType, slot, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all the users Invite Messages. Admin Credentials are required to view messages of other users!  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
         * @summary List Invite Messages
         * @param {string} userId 
         * @param {'message' | 'response' | 'request' | 'requestResponse'} messageType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInviteMessages(userId: string, messageType: 'message' | 'response' | 'request' | 'requestResponse', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InviteMessage>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInviteMessages(userId, messageType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Sends an invite to a user. Returns the Notification of type `invite` that was sent.
         * @summary Invite User
         * @param {string} userId 
         * @param {InviteRequest} [inviteRequest] Slot number of the Invite Message to use when inviting a user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async inviteUser(userId: string, inviteRequest?: InviteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.inviteUser(userId, inviteRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Requests an invite from a user. Returns the Notification of type `requestInvite` that was sent.
         * @summary Request Invite
         * @param {string} userId 
         * @param {RequestInviteRequest} [requestInviteRequest] Slot number of the Request Message to use when request an invite.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async requestInvite(userId: string, requestInviteRequest?: RequestInviteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.requestInvite(userId, requestInviteRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Resets a single Invite Message back to its original message, and then returns a list of all of them. Admin Credentials are required to update messages of other users!  Resetting a message respects the rate-limit, so it is not possible to reset within the 60 minutes countdown. Resetting it does however not set the rate-limit to 60 like when editing it. It is possible to edit it right after resetting it. Trying to edit a message before the cooldown timer expires results in a 429 \"Too Fast Error\".  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite  The DELETE endpoint does not have/require any request body.
         * @summary Reset Invite Message
         * @param {string} userId 
         * @param {'message' | 'response' | 'request' | 'requestResponse'} messageType 
         * @param {number} slot 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetInviteMessage(userId: string, messageType: 'message' | 'response' | 'request' | 'requestResponse', slot: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InviteMessage>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetInviteMessage(userId, messageType, slot, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Respond to an invite request by sending a world invite to the requesting user. `:notificationId` is the ID of the requesting notification.
         * @summary Respond Invite
         * @param {string} notificationId 
         * @param {InviteResponse} [inviteResponse] Slot number of the Response Message to use when responding to a user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async respondInvite(notificationId: string, inviteResponse?: InviteResponse, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.respondInvite(notificationId, inviteResponse, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a single Invite Message and then returns a list of all of them. Admin Credentials are required to update messages of other users!  Updating a message automatically sets the cooldown timer to 60 minutes. Trying to edit a message before the cooldown timer expires results in a 429 \"Too Fast Error\".  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
         * @summary Update Invite Message
         * @param {string} userId 
         * @param {'message' | 'response' | 'request' | 'requestResponse'} messageType 
         * @param {number} slot 
         * @param {UpdateInviteMessageRequest} [updateInviteMessageRequest] Message of what to set the invite message to.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateInviteMessage(userId: string, messageType: 'message' | 'response' | 'request' | 'requestResponse', slot: number, updateInviteMessageRequest?: UpdateInviteMessageRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InviteMessage>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateInviteMessage(userId, messageType, slot, updateInviteMessageRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * InviteApi - factory interface
 * @export
 */
export const InviteApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InviteApiFp(configuration)
    return {
        /**
         * Returns a single Invite Message. This returns the exact same information but less than `getInviteMessages`. Admin Credentials are required to view messages of other users!  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
         * @summary Get Invite Message
         * @param {string} userId 
         * @param {'message' | 'response' | 'request' | 'requestResponse'} messageType 
         * @param {number} slot 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInviteMessage(userId: string, messageType: 'message' | 'response' | 'request' | 'requestResponse', slot: number, options?: any): AxiosPromise<InviteMessage> {
            return localVarFp.getInviteMessage(userId, messageType, slot, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the users Invite Messages. Admin Credentials are required to view messages of other users!  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
         * @summary List Invite Messages
         * @param {string} userId 
         * @param {'message' | 'response' | 'request' | 'requestResponse'} messageType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInviteMessages(userId: string, messageType: 'message' | 'response' | 'request' | 'requestResponse', options?: any): AxiosPromise<Array<InviteMessage>> {
            return localVarFp.getInviteMessages(userId, messageType, options).then((request) => request(axios, basePath));
        },
        /**
         * Sends an invite to a user. Returns the Notification of type `invite` that was sent.
         * @summary Invite User
         * @param {string} userId 
         * @param {InviteRequest} [inviteRequest] Slot number of the Invite Message to use when inviting a user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inviteUser(userId: string, inviteRequest?: InviteRequest, options?: any): AxiosPromise<Notification> {
            return localVarFp.inviteUser(userId, inviteRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Requests an invite from a user. Returns the Notification of type `requestInvite` that was sent.
         * @summary Request Invite
         * @param {string} userId 
         * @param {RequestInviteRequest} [requestInviteRequest] Slot number of the Request Message to use when request an invite.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestInvite(userId: string, requestInviteRequest?: RequestInviteRequest, options?: any): AxiosPromise<Notification> {
            return localVarFp.requestInvite(userId, requestInviteRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Resets a single Invite Message back to its original message, and then returns a list of all of them. Admin Credentials are required to update messages of other users!  Resetting a message respects the rate-limit, so it is not possible to reset within the 60 minutes countdown. Resetting it does however not set the rate-limit to 60 like when editing it. It is possible to edit it right after resetting it. Trying to edit a message before the cooldown timer expires results in a 429 \"Too Fast Error\".  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite  The DELETE endpoint does not have/require any request body.
         * @summary Reset Invite Message
         * @param {string} userId 
         * @param {'message' | 'response' | 'request' | 'requestResponse'} messageType 
         * @param {number} slot 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetInviteMessage(userId: string, messageType: 'message' | 'response' | 'request' | 'requestResponse', slot: number, options?: any): AxiosPromise<Array<InviteMessage>> {
            return localVarFp.resetInviteMessage(userId, messageType, slot, options).then((request) => request(axios, basePath));
        },
        /**
         * Respond to an invite request by sending a world invite to the requesting user. `:notificationId` is the ID of the requesting notification.
         * @summary Respond Invite
         * @param {string} notificationId 
         * @param {InviteResponse} [inviteResponse] Slot number of the Response Message to use when responding to a user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        respondInvite(notificationId: string, inviteResponse?: InviteResponse, options?: any): AxiosPromise<Notification> {
            return localVarFp.respondInvite(notificationId, inviteResponse, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a single Invite Message and then returns a list of all of them. Admin Credentials are required to update messages of other users!  Updating a message automatically sets the cooldown timer to 60 minutes. Trying to edit a message before the cooldown timer expires results in a 429 \"Too Fast Error\".  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
         * @summary Update Invite Message
         * @param {string} userId 
         * @param {'message' | 'response' | 'request' | 'requestResponse'} messageType 
         * @param {number} slot 
         * @param {UpdateInviteMessageRequest} [updateInviteMessageRequest] Message of what to set the invite message to.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateInviteMessage(userId: string, messageType: 'message' | 'response' | 'request' | 'requestResponse', slot: number, updateInviteMessageRequest?: UpdateInviteMessageRequest, options?: any): AxiosPromise<Array<InviteMessage>> {
            return localVarFp.updateInviteMessage(userId, messageType, slot, updateInviteMessageRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * InviteApi - object-oriented interface
 * @export
 * @class InviteApi
 * @extends {BaseAPI}
 */
export class InviteApi extends BaseAPI {
    /**
     * Returns a single Invite Message. This returns the exact same information but less than `getInviteMessages`. Admin Credentials are required to view messages of other users!  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
     * @summary Get Invite Message
     * @param {string} userId 
     * @param {'message' | 'response' | 'request' | 'requestResponse'} messageType 
     * @param {number} slot 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InviteApi
     */
    public getInviteMessage(userId: string, messageType: 'message' | 'response' | 'request' | 'requestResponse', slot: number, options?: AxiosRequestConfig) {
        return InviteApiFp(this.configuration).getInviteMessage(userId, messageType, slot, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all the users Invite Messages. Admin Credentials are required to view messages of other users!  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
     * @summary List Invite Messages
     * @param {string} userId 
     * @param {'message' | 'response' | 'request' | 'requestResponse'} messageType 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InviteApi
     */
    public getInviteMessages(userId: string, messageType: 'message' | 'response' | 'request' | 'requestResponse', options?: AxiosRequestConfig) {
        return InviteApiFp(this.configuration).getInviteMessages(userId, messageType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sends an invite to a user. Returns the Notification of type `invite` that was sent.
     * @summary Invite User
     * @param {string} userId 
     * @param {InviteRequest} [inviteRequest] Slot number of the Invite Message to use when inviting a user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InviteApi
     */
    public inviteUser(userId: string, inviteRequest?: InviteRequest, options?: AxiosRequestConfig) {
        return InviteApiFp(this.configuration).inviteUser(userId, inviteRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Requests an invite from a user. Returns the Notification of type `requestInvite` that was sent.
     * @summary Request Invite
     * @param {string} userId 
     * @param {RequestInviteRequest} [requestInviteRequest] Slot number of the Request Message to use when request an invite.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InviteApi
     */
    public requestInvite(userId: string, requestInviteRequest?: RequestInviteRequest, options?: AxiosRequestConfig) {
        return InviteApiFp(this.configuration).requestInvite(userId, requestInviteRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resets a single Invite Message back to its original message, and then returns a list of all of them. Admin Credentials are required to update messages of other users!  Resetting a message respects the rate-limit, so it is not possible to reset within the 60 minutes countdown. Resetting it does however not set the rate-limit to 60 like when editing it. It is possible to edit it right after resetting it. Trying to edit a message before the cooldown timer expires results in a 429 \"Too Fast Error\".  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite  The DELETE endpoint does not have/require any request body.
     * @summary Reset Invite Message
     * @param {string} userId 
     * @param {'message' | 'response' | 'request' | 'requestResponse'} messageType 
     * @param {number} slot 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InviteApi
     */
    public resetInviteMessage(userId: string, messageType: 'message' | 'response' | 'request' | 'requestResponse', slot: number, options?: AxiosRequestConfig) {
        return InviteApiFp(this.configuration).resetInviteMessage(userId, messageType, slot, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Respond to an invite request by sending a world invite to the requesting user. `:notificationId` is the ID of the requesting notification.
     * @summary Respond Invite
     * @param {string} notificationId 
     * @param {InviteResponse} [inviteResponse] Slot number of the Response Message to use when responding to a user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InviteApi
     */
    public respondInvite(notificationId: string, inviteResponse?: InviteResponse, options?: AxiosRequestConfig) {
        return InviteApiFp(this.configuration).respondInvite(notificationId, inviteResponse, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a single Invite Message and then returns a list of all of them. Admin Credentials are required to update messages of other users!  Updating a message automatically sets the cooldown timer to 60 minutes. Trying to edit a message before the cooldown timer expires results in a 429 \"Too Fast Error\".  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
     * @summary Update Invite Message
     * @param {string} userId 
     * @param {'message' | 'response' | 'request' | 'requestResponse'} messageType 
     * @param {number} slot 
     * @param {UpdateInviteMessageRequest} [updateInviteMessageRequest] Message of what to set the invite message to.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InviteApi
     */
    public updateInviteMessage(userId: string, messageType: 'message' | 'response' | 'request' | 'requestResponse', slot: number, updateInviteMessageRequest?: UpdateInviteMessageRequest, options?: AxiosRequestConfig) {
        return InviteApiFp(this.configuration).updateInviteMessage(userId, messageType, slot, updateInviteMessageRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * NotificationsApi - axios parameter creator
 * @export
 */
export const NotificationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Accept a friend request by notification `frq_` ID. Friend requests can be found using the NotificationsAPI `getNotifications` by filtering of type `friendRequest`.
         * @summary Accept Friend Request
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        acceptFriendRequest: async (notificationId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'notificationId' is not null or undefined
            assertParamExists('acceptFriendRequest', 'notificationId', notificationId)
            const localVarPath = `/auth/user/notifications/{notificationId}/accept`
                .replace(`{${"notificationId"}}`, encodeURIComponent(String(notificationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Clear **all** notifications.
         * @summary Clear All Notifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clearNotifications: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user/notifications/clear`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a notification.
         * @summary Delete Notification
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNotification: async (notificationId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'notificationId' is not null or undefined
            assertParamExists('deleteNotification', 'notificationId', notificationId)
            const localVarPath = `/auth/user/notifications/{notificationId}/hide`
                .replace(`{${"notificationId"}}`, encodeURIComponent(String(notificationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve all of the current user\'s notifications.
         * @summary List Notifications
         * @param {string} [type] Only send notifications of this type (can use &#x60;all&#x60; for all).
         * @param {boolean} [sent] Return notifications sent by the user. Must be false or omitted.
         * @param {boolean} [hidden] Whether to return hidden or non-hidden notifications. True only allowed on type &#x60;friendRequest&#x60;.
         * @param {string} [after] Only return notifications sent after this Date. Ignored if type is &#x60;friendRequest&#x60;.
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotifications: async (type?: string, sent?: boolean, hidden?: boolean, after?: string, n?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user/notifications`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (sent !== undefined) {
                localVarQueryParameter['sent'] = sent;
            }

            if (hidden !== undefined) {
                localVarQueryParameter['hidden'] = hidden;
            }

            if (after !== undefined) {
                localVarQueryParameter['after'] = after;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Mark a notification as seen.
         * @summary Mark Notification As Read
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        markNotificationAsRead: async (notificationId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'notificationId' is not null or undefined
            assertParamExists('markNotificationAsRead', 'notificationId', notificationId)
            const localVarPath = `/auth/user/notifications/{notificationId}/see`
                .replace(`{${"notificationId"}}`, encodeURIComponent(String(notificationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NotificationsApi - functional programming interface
 * @export
 */
export const NotificationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NotificationsApiAxiosParamCreator(configuration)
    return {
        /**
         * Accept a friend request by notification `frq_` ID. Friend requests can be found using the NotificationsAPI `getNotifications` by filtering of type `friendRequest`.
         * @summary Accept Friend Request
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async acceptFriendRequest(notificationId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.acceptFriendRequest(notificationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Clear **all** notifications.
         * @summary Clear All Notifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clearNotifications(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.clearNotifications(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a notification.
         * @summary Delete Notification
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteNotification(notificationId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteNotification(notificationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve all of the current user\'s notifications.
         * @summary List Notifications
         * @param {string} [type] Only send notifications of this type (can use &#x60;all&#x60; for all).
         * @param {boolean} [sent] Return notifications sent by the user. Must be false or omitted.
         * @param {boolean} [hidden] Whether to return hidden or non-hidden notifications. True only allowed on type &#x60;friendRequest&#x60;.
         * @param {string} [after] Only return notifications sent after this Date. Ignored if type is &#x60;friendRequest&#x60;.
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNotifications(type?: string, sent?: boolean, hidden?: boolean, after?: string, n?: number, offset?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Notification>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNotifications(type, sent, hidden, after, n, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Mark a notification as seen.
         * @summary Mark Notification As Read
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async markNotificationAsRead(notificationId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.markNotificationAsRead(notificationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NotificationsApi - factory interface
 * @export
 */
export const NotificationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NotificationsApiFp(configuration)
    return {
        /**
         * Accept a friend request by notification `frq_` ID. Friend requests can be found using the NotificationsAPI `getNotifications` by filtering of type `friendRequest`.
         * @summary Accept Friend Request
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        acceptFriendRequest(notificationId: string, options?: any): AxiosPromise<Success> {
            return localVarFp.acceptFriendRequest(notificationId, options).then((request) => request(axios, basePath));
        },
        /**
         * Clear **all** notifications.
         * @summary Clear All Notifications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clearNotifications(options?: any): AxiosPromise<Success> {
            return localVarFp.clearNotifications(options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a notification.
         * @summary Delete Notification
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNotification(notificationId: string, options?: any): AxiosPromise<Notification> {
            return localVarFp.deleteNotification(notificationId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve all of the current user\'s notifications.
         * @summary List Notifications
         * @param {string} [type] Only send notifications of this type (can use &#x60;all&#x60; for all).
         * @param {boolean} [sent] Return notifications sent by the user. Must be false or omitted.
         * @param {boolean} [hidden] Whether to return hidden or non-hidden notifications. True only allowed on type &#x60;friendRequest&#x60;.
         * @param {string} [after] Only return notifications sent after this Date. Ignored if type is &#x60;friendRequest&#x60;.
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotifications(type?: string, sent?: boolean, hidden?: boolean, after?: string, n?: number, offset?: number, options?: any): AxiosPromise<Array<Notification>> {
            return localVarFp.getNotifications(type, sent, hidden, after, n, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * Mark a notification as seen.
         * @summary Mark Notification As Read
         * @param {string} notificationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        markNotificationAsRead(notificationId: string, options?: any): AxiosPromise<Notification> {
            return localVarFp.markNotificationAsRead(notificationId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NotificationsApi - object-oriented interface
 * @export
 * @class NotificationsApi
 * @extends {BaseAPI}
 */
export class NotificationsApi extends BaseAPI {
    /**
     * Accept a friend request by notification `frq_` ID. Friend requests can be found using the NotificationsAPI `getNotifications` by filtering of type `friendRequest`.
     * @summary Accept Friend Request
     * @param {string} notificationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public acceptFriendRequest(notificationId: string, options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).acceptFriendRequest(notificationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Clear **all** notifications.
     * @summary Clear All Notifications
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public clearNotifications(options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).clearNotifications(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a notification.
     * @summary Delete Notification
     * @param {string} notificationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public deleteNotification(notificationId: string, options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).deleteNotification(notificationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve all of the current user\'s notifications.
     * @summary List Notifications
     * @param {string} [type] Only send notifications of this type (can use &#x60;all&#x60; for all).
     * @param {boolean} [sent] Return notifications sent by the user. Must be false or omitted.
     * @param {boolean} [hidden] Whether to return hidden or non-hidden notifications. True only allowed on type &#x60;friendRequest&#x60;.
     * @param {string} [after] Only return notifications sent after this Date. Ignored if type is &#x60;friendRequest&#x60;.
     * @param {number} [n] The number of objects to return.
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public getNotifications(type?: string, sent?: boolean, hidden?: boolean, after?: string, n?: number, offset?: number, options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).getNotifications(type, sent, hidden, after, n, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Mark a notification as seen.
     * @summary Mark Notification As Read
     * @param {string} notificationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationsApi
     */
    public markNotificationAsRead(notificationId: string, options?: AxiosRequestConfig) {
        return NotificationsApiFp(this.configuration).markNotificationAsRead(notificationId, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * PermissionsApi - axios parameter creator
 * @export
 */
export const PermissionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of all permissions currently granted by the user. Permissions are assigned e.g. by subscribing to VRC+.
         * @summary Get Assigned Permissions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssignedPermissions: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/permissions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single permission. This endpoint is pretty useless, as it returns the exact same information as `/auth/permissions`.
         * @summary Get Permission
         * @param {string} permissionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPermission: async (permissionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'permissionId' is not null or undefined
            assertParamExists('getPermission', 'permissionId', permissionId)
            const localVarPath = `/permissions/{permissionId}`
                .replace(`{${"permissionId"}}`, encodeURIComponent(String(permissionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PermissionsApi - functional programming interface
 * @export
 */
export const PermissionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PermissionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of all permissions currently granted by the user. Permissions are assigned e.g. by subscribing to VRC+.
         * @summary Get Assigned Permissions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAssignedPermissions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Permission>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAssignedPermissions(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a single permission. This endpoint is pretty useless, as it returns the exact same information as `/auth/permissions`.
         * @summary Get Permission
         * @param {string} permissionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPermission(permissionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Permission>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPermission(permissionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PermissionsApi - factory interface
 * @export
 */
export const PermissionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PermissionsApiFp(configuration)
    return {
        /**
         * Returns a list of all permissions currently granted by the user. Permissions are assigned e.g. by subscribing to VRC+.
         * @summary Get Assigned Permissions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAssignedPermissions(options?: any): AxiosPromise<Array<Permission>> {
            return localVarFp.getAssignedPermissions(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a single permission. This endpoint is pretty useless, as it returns the exact same information as `/auth/permissions`.
         * @summary Get Permission
         * @param {string} permissionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPermission(permissionId: string, options?: any): AxiosPromise<Permission> {
            return localVarFp.getPermission(permissionId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PermissionsApi - object-oriented interface
 * @export
 * @class PermissionsApi
 * @extends {BaseAPI}
 */
export class PermissionsApi extends BaseAPI {
    /**
     * Returns a list of all permissions currently granted by the user. Permissions are assigned e.g. by subscribing to VRC+.
     * @summary Get Assigned Permissions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    public getAssignedPermissions(options?: AxiosRequestConfig) {
        return PermissionsApiFp(this.configuration).getAssignedPermissions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a single permission. This endpoint is pretty useless, as it returns the exact same information as `/auth/permissions`.
     * @summary Get Permission
     * @param {string} permissionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    public getPermission(permissionId: string, options?: AxiosRequestConfig) {
        return PermissionsApiFp(this.configuration).getPermission(permissionId, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * PlayermoderationApi - axios parameter creator
 * @export
 */
export const PlayermoderationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ⚠️ **This will delete every single player moderation you\'ve ever made.**
         * @summary Clear All Player Moderations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clearAllPlayerModerations: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user/playermoderations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a specific player moderation based on it\'s `pmod_` ID. The website uses `unmoderateUser` instead. You can delete the same player moderation multiple times successfully.
         * @summary Delete Player Moderation
         * @param {string} playerModerationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePlayerModeration: async (playerModerationId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'playerModerationId' is not null or undefined
            assertParamExists('deletePlayerModeration', 'playerModerationId', playerModerationId)
            const localVarPath = `/auth/user/playermoderations/{playerModerationId}`
                .replace(`{${"playerModerationId"}}`, encodeURIComponent(String(playerModerationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single Player Moderation. This returns the exact same amount of information as the more generalised `getPlayerModerations`.
         * @summary Get Player Moderation
         * @param {string} playerModerationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlayerModeration: async (playerModerationId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'playerModerationId' is not null or undefined
            assertParamExists('getPlayerModeration', 'playerModerationId', playerModerationId)
            const localVarPath = `/auth/user/playermoderations/{playerModerationId}`
                .replace(`{${"playerModerationId"}}`, encodeURIComponent(String(playerModerationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all player moderations made by **you**.  This endpoint does not have pagination, and will return *all* results. Use query parameters to limit your query if needed.
         * @summary Search Player Moderations
         * @param {string} [type] Must be one of PlayerModerationType, except unblock. Unblocking simply removes a block.
         * @param {string} [targetUserId] Must be valid UserID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlayerModerations: async (type?: string, targetUserId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user/playermoderations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (targetUserId !== undefined) {
                localVarQueryParameter['targetUserId'] = targetUserId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Moderate a user, e.g. unmute them or show their avatar.  Please see the [Player Moderation docs](https://vrchatapi.github.io/docs/api/#tag--playermoderation) on what playerModerations are, and how they differ from staff moderations.
         * @summary Moderate User
         * @param {ModerateUserRequest} [moderateUserRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        moderateUser: async (moderateUserRequest?: ModerateUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user/playermoderations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(moderateUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes a player moderation previously added through `moderateUser`. E.g if you previously have shown their avatar, but now want to reset it to default.
         * @summary Unmoderate User
         * @param {ModerateUserRequest} [moderateUserRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unmoderateUser: async (moderateUserRequest?: ModerateUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/user/unplayermoderate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(moderateUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PlayermoderationApi - functional programming interface
 * @export
 */
export const PlayermoderationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PlayermoderationApiAxiosParamCreator(configuration)
    return {
        /**
         * ⚠️ **This will delete every single player moderation you\'ve ever made.**
         * @summary Clear All Player Moderations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clearAllPlayerModerations(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.clearAllPlayerModerations(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a specific player moderation based on it\'s `pmod_` ID. The website uses `unmoderateUser` instead. You can delete the same player moderation multiple times successfully.
         * @summary Delete Player Moderation
         * @param {string} playerModerationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePlayerModeration(playerModerationId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePlayerModeration(playerModerationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a single Player Moderation. This returns the exact same amount of information as the more generalised `getPlayerModerations`.
         * @summary Get Player Moderation
         * @param {string} playerModerationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlayerModeration(playerModerationId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlayerModeration>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPlayerModeration(playerModerationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all player moderations made by **you**.  This endpoint does not have pagination, and will return *all* results. Use query parameters to limit your query if needed.
         * @summary Search Player Moderations
         * @param {string} [type] Must be one of PlayerModerationType, except unblock. Unblocking simply removes a block.
         * @param {string} [targetUserId] Must be valid UserID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlayerModerations(type?: string, targetUserId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PlayerModeration>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPlayerModerations(type, targetUserId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Moderate a user, e.g. unmute them or show their avatar.  Please see the [Player Moderation docs](https://vrchatapi.github.io/docs/api/#tag--playermoderation) on what playerModerations are, and how they differ from staff moderations.
         * @summary Moderate User
         * @param {ModerateUserRequest} [moderateUserRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async moderateUser(moderateUserRequest?: ModerateUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlayerModeration>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.moderateUser(moderateUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Removes a player moderation previously added through `moderateUser`. E.g if you previously have shown their avatar, but now want to reset it to default.
         * @summary Unmoderate User
         * @param {ModerateUserRequest} [moderateUserRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unmoderateUser(moderateUserRequest?: ModerateUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unmoderateUser(moderateUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PlayermoderationApi - factory interface
 * @export
 */
export const PlayermoderationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PlayermoderationApiFp(configuration)
    return {
        /**
         * ⚠️ **This will delete every single player moderation you\'ve ever made.**
         * @summary Clear All Player Moderations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clearAllPlayerModerations(options?: any): AxiosPromise<Success> {
            return localVarFp.clearAllPlayerModerations(options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a specific player moderation based on it\'s `pmod_` ID. The website uses `unmoderateUser` instead. You can delete the same player moderation multiple times successfully.
         * @summary Delete Player Moderation
         * @param {string} playerModerationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePlayerModeration(playerModerationId: string, options?: any): AxiosPromise<Success> {
            return localVarFp.deletePlayerModeration(playerModerationId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a single Player Moderation. This returns the exact same amount of information as the more generalised `getPlayerModerations`.
         * @summary Get Player Moderation
         * @param {string} playerModerationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlayerModeration(playerModerationId: string, options?: any): AxiosPromise<PlayerModeration> {
            return localVarFp.getPlayerModeration(playerModerationId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all player moderations made by **you**.  This endpoint does not have pagination, and will return *all* results. Use query parameters to limit your query if needed.
         * @summary Search Player Moderations
         * @param {string} [type] Must be one of PlayerModerationType, except unblock. Unblocking simply removes a block.
         * @param {string} [targetUserId] Must be valid UserID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlayerModerations(type?: string, targetUserId?: string, options?: any): AxiosPromise<Array<PlayerModeration>> {
            return localVarFp.getPlayerModerations(type, targetUserId, options).then((request) => request(axios, basePath));
        },
        /**
         * Moderate a user, e.g. unmute them or show their avatar.  Please see the [Player Moderation docs](https://vrchatapi.github.io/docs/api/#tag--playermoderation) on what playerModerations are, and how they differ from staff moderations.
         * @summary Moderate User
         * @param {ModerateUserRequest} [moderateUserRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        moderateUser(moderateUserRequest?: ModerateUserRequest, options?: any): AxiosPromise<PlayerModeration> {
            return localVarFp.moderateUser(moderateUserRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes a player moderation previously added through `moderateUser`. E.g if you previously have shown their avatar, but now want to reset it to default.
         * @summary Unmoderate User
         * @param {ModerateUserRequest} [moderateUserRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unmoderateUser(moderateUserRequest?: ModerateUserRequest, options?: any): AxiosPromise<Success> {
            return localVarFp.unmoderateUser(moderateUserRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PlayermoderationApi - object-oriented interface
 * @export
 * @class PlayermoderationApi
 * @extends {BaseAPI}
 */
export class PlayermoderationApi extends BaseAPI {
    /**
     * ⚠️ **This will delete every single player moderation you\'ve ever made.**
     * @summary Clear All Player Moderations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayermoderationApi
     */
    public clearAllPlayerModerations(options?: AxiosRequestConfig) {
        return PlayermoderationApiFp(this.configuration).clearAllPlayerModerations(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a specific player moderation based on it\'s `pmod_` ID. The website uses `unmoderateUser` instead. You can delete the same player moderation multiple times successfully.
     * @summary Delete Player Moderation
     * @param {string} playerModerationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayermoderationApi
     */
    public deletePlayerModeration(playerModerationId: string, options?: AxiosRequestConfig) {
        return PlayermoderationApiFp(this.configuration).deletePlayerModeration(playerModerationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a single Player Moderation. This returns the exact same amount of information as the more generalised `getPlayerModerations`.
     * @summary Get Player Moderation
     * @param {string} playerModerationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayermoderationApi
     */
    public getPlayerModeration(playerModerationId: string, options?: AxiosRequestConfig) {
        return PlayermoderationApiFp(this.configuration).getPlayerModeration(playerModerationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all player moderations made by **you**.  This endpoint does not have pagination, and will return *all* results. Use query parameters to limit your query if needed.
     * @summary Search Player Moderations
     * @param {string} [type] Must be one of PlayerModerationType, except unblock. Unblocking simply removes a block.
     * @param {string} [targetUserId] Must be valid UserID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayermoderationApi
     */
    public getPlayerModerations(type?: string, targetUserId?: string, options?: AxiosRequestConfig) {
        return PlayermoderationApiFp(this.configuration).getPlayerModerations(type, targetUserId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Moderate a user, e.g. unmute them or show their avatar.  Please see the [Player Moderation docs](https://vrchatapi.github.io/docs/api/#tag--playermoderation) on what playerModerations are, and how they differ from staff moderations.
     * @summary Moderate User
     * @param {ModerateUserRequest} [moderateUserRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayermoderationApi
     */
    public moderateUser(moderateUserRequest?: ModerateUserRequest, options?: AxiosRequestConfig) {
        return PlayermoderationApiFp(this.configuration).moderateUser(moderateUserRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Removes a player moderation previously added through `moderateUser`. E.g if you previously have shown their avatar, but now want to reset it to default.
     * @summary Unmoderate User
     * @param {ModerateUserRequest} [moderateUserRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayermoderationApi
     */
    public unmoderateUser(moderateUserRequest?: ModerateUserRequest, options?: AxiosRequestConfig) {
        return PlayermoderationApiFp(this.configuration).unmoderateUser(moderateUserRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * SystemApi - axios parameter creator
 * @export
 */
export const SystemApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetches the CSS code to the frontend React website.
         * @summary Download CSS
         * @param {'public' | 'internal'} [variant] Specifies which &#x60;variant&#x60; of the site. Public is the end-user site, while &#x60;internal&#x60; is the staff-only site with special pages for moderation and management.
         * @param {string} [branch] Specifies which git branch the site should load frontend source code from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCSS: async (variant?: 'public' | 'internal', branch?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/css/app.css`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (variant !== undefined) {
                localVarQueryParameter['variant'] = variant;
            }

            if (branch !== undefined) {
                localVarQueryParameter['branch'] = branch;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * API config contains configuration that the clients needs to work properly.  Currently the most important value here is `clientApiKey` which is used for all other API endpoints.
         * @summary Fetch API Config
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfig: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/config`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the current number of online users.  **NOTE:** The response type is not a JSON object, but a simple JSON integer.
         * @summary Current Online Users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentOnlineUsers: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/visits`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ~~Gets the overall health status, the server name, and the current build version tag of the API.~~  **DEPRECATED:** VRChat has suddenly restricted this endpoint for unknown reasons, and now always return 401 Unauthorized.
         * @summary Check API Health
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getHealth: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/health`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * IPS (Info Push System) is a system for VRChat to push out dynamic information to the client. This is primarily used by the Quick-Menu info banners, but can also be used to e.g. alert you to update your game to the latest version.  `include` is used to query what Information Pushes should be included in the response. If include is missing or empty, then no notices will normally be returned. This is an \"any of\" search.  `require` is used to limit what Information Pushes should be included in the response. This is usually used in combination with `include`, and is an \"all of\" search.
         * @summary Show Information Notices
         * @param {string} [require] Tags to include (comma-separated). All of the tags needs to be present.
         * @param {string} [include] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfoPush: async (require?: string, include?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/infoPush`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (require !== undefined) {
                localVarQueryParameter['require'] = require;
            }

            if (include !== undefined) {
                localVarQueryParameter['include'] = include;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches the JavaScript code to the frontend React website.
         * @summary Download JavaScript
         * @param {'public' | 'internal'} [variant] Specifies which &#x60;variant&#x60; of the site. Public is the end-user site, while &#x60;internal&#x60; is the staff-only site with special pages for moderation and management.
         * @param {string} [branch] Specifies which git branch the site should load frontend source code from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJavaScript: async (variant?: 'public' | 'internal', branch?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/js/app.js`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (variant !== undefined) {
                localVarQueryParameter['variant'] = variant;
            }

            if (branch !== undefined) {
                localVarQueryParameter['branch'] = branch;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the current time of the API server.  **NOTE:** The response type is not a JSON object, but a simple JSON string.
         * @summary Current System Time
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemTime: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/time`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SystemApi - functional programming interface
 * @export
 */
export const SystemApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SystemApiAxiosParamCreator(configuration)
    return {
        /**
         * Fetches the CSS code to the frontend React website.
         * @summary Download CSS
         * @param {'public' | 'internal'} [variant] Specifies which &#x60;variant&#x60; of the site. Public is the end-user site, while &#x60;internal&#x60; is the staff-only site with special pages for moderation and management.
         * @param {string} [branch] Specifies which git branch the site should load frontend source code from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCSS(variant?: 'public' | 'internal', branch?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCSS(variant, branch, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * API config contains configuration that the clients needs to work properly.  Currently the most important value here is `clientApiKey` which is used for all other API endpoints.
         * @summary Fetch API Config
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConfig(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APIConfig>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConfig(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the current number of online users.  **NOTE:** The response type is not a JSON object, but a simple JSON integer.
         * @summary Current Online Users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCurrentOnlineUsers(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCurrentOnlineUsers(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ~~Gets the overall health status, the server name, and the current build version tag of the API.~~  **DEPRECATED:** VRChat has suddenly restricted this endpoint for unknown reasons, and now always return 401 Unauthorized.
         * @summary Check API Health
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async getHealth(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<APIHealth>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHealth(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * IPS (Info Push System) is a system for VRChat to push out dynamic information to the client. This is primarily used by the Quick-Menu info banners, but can also be used to e.g. alert you to update your game to the latest version.  `include` is used to query what Information Pushes should be included in the response. If include is missing or empty, then no notices will normally be returned. This is an \"any of\" search.  `require` is used to limit what Information Pushes should be included in the response. This is usually used in combination with `include`, and is an \"all of\" search.
         * @summary Show Information Notices
         * @param {string} [require] Tags to include (comma-separated). All of the tags needs to be present.
         * @param {string} [include] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInfoPush(require?: string, include?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InfoPush>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInfoPush(require, include, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetches the JavaScript code to the frontend React website.
         * @summary Download JavaScript
         * @param {'public' | 'internal'} [variant] Specifies which &#x60;variant&#x60; of the site. Public is the end-user site, while &#x60;internal&#x60; is the staff-only site with special pages for moderation and management.
         * @param {string} [branch] Specifies which git branch the site should load frontend source code from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJavaScript(variant?: 'public' | 'internal', branch?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJavaScript(variant, branch, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the current time of the API server.  **NOTE:** The response type is not a JSON object, but a simple JSON string.
         * @summary Current System Time
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSystemTime(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSystemTime(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SystemApi - factory interface
 * @export
 */
export const SystemApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SystemApiFp(configuration)
    return {
        /**
         * Fetches the CSS code to the frontend React website.
         * @summary Download CSS
         * @param {'public' | 'internal'} [variant] Specifies which &#x60;variant&#x60; of the site. Public is the end-user site, while &#x60;internal&#x60; is the staff-only site with special pages for moderation and management.
         * @param {string} [branch] Specifies which git branch the site should load frontend source code from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCSS(variant?: 'public' | 'internal', branch?: string, options?: any): AxiosPromise<string> {
            return localVarFp.getCSS(variant, branch, options).then((request) => request(axios, basePath));
        },
        /**
         * API config contains configuration that the clients needs to work properly.  Currently the most important value here is `clientApiKey` which is used for all other API endpoints.
         * @summary Fetch API Config
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConfig(options?: any): AxiosPromise<APIConfig> {
            return localVarFp.getConfig(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the current number of online users.  **NOTE:** The response type is not a JSON object, but a simple JSON integer.
         * @summary Current Online Users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentOnlineUsers(options?: any): AxiosPromise<number> {
            return localVarFp.getCurrentOnlineUsers(options).then((request) => request(axios, basePath));
        },
        /**
         * ~~Gets the overall health status, the server name, and the current build version tag of the API.~~  **DEPRECATED:** VRChat has suddenly restricted this endpoint for unknown reasons, and now always return 401 Unauthorized.
         * @summary Check API Health
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getHealth(options?: any): AxiosPromise<APIHealth> {
            return localVarFp.getHealth(options).then((request) => request(axios, basePath));
        },
        /**
         * IPS (Info Push System) is a system for VRChat to push out dynamic information to the client. This is primarily used by the Quick-Menu info banners, but can also be used to e.g. alert you to update your game to the latest version.  `include` is used to query what Information Pushes should be included in the response. If include is missing or empty, then no notices will normally be returned. This is an \"any of\" search.  `require` is used to limit what Information Pushes should be included in the response. This is usually used in combination with `include`, and is an \"all of\" search.
         * @summary Show Information Notices
         * @param {string} [require] Tags to include (comma-separated). All of the tags needs to be present.
         * @param {string} [include] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfoPush(require?: string, include?: string, options?: any): AxiosPromise<Array<InfoPush>> {
            return localVarFp.getInfoPush(require, include, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches the JavaScript code to the frontend React website.
         * @summary Download JavaScript
         * @param {'public' | 'internal'} [variant] Specifies which &#x60;variant&#x60; of the site. Public is the end-user site, while &#x60;internal&#x60; is the staff-only site with special pages for moderation and management.
         * @param {string} [branch] Specifies which git branch the site should load frontend source code from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJavaScript(variant?: 'public' | 'internal', branch?: string, options?: any): AxiosPromise<string> {
            return localVarFp.getJavaScript(variant, branch, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the current time of the API server.  **NOTE:** The response type is not a JSON object, but a simple JSON string.
         * @summary Current System Time
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemTime(options?: any): AxiosPromise<string> {
            return localVarFp.getSystemTime(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SystemApi - object-oriented interface
 * @export
 * @class SystemApi
 * @extends {BaseAPI}
 */
export class SystemApi extends BaseAPI {
    /**
     * Fetches the CSS code to the frontend React website.
     * @summary Download CSS
     * @param {'public' | 'internal'} [variant] Specifies which &#x60;variant&#x60; of the site. Public is the end-user site, while &#x60;internal&#x60; is the staff-only site with special pages for moderation and management.
     * @param {string} [branch] Specifies which git branch the site should load frontend source code from.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getCSS(variant?: 'public' | 'internal', branch?: string, options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).getCSS(variant, branch, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * API config contains configuration that the clients needs to work properly.  Currently the most important value here is `clientApiKey` which is used for all other API endpoints.
     * @summary Fetch API Config
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getConfig(options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).getConfig(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the current number of online users.  **NOTE:** The response type is not a JSON object, but a simple JSON integer.
     * @summary Current Online Users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getCurrentOnlineUsers(options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).getCurrentOnlineUsers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ~~Gets the overall health status, the server name, and the current build version tag of the API.~~  **DEPRECATED:** VRChat has suddenly restricted this endpoint for unknown reasons, and now always return 401 Unauthorized.
     * @summary Check API Health
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getHealth(options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).getHealth(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * IPS (Info Push System) is a system for VRChat to push out dynamic information to the client. This is primarily used by the Quick-Menu info banners, but can also be used to e.g. alert you to update your game to the latest version.  `include` is used to query what Information Pushes should be included in the response. If include is missing or empty, then no notices will normally be returned. This is an \"any of\" search.  `require` is used to limit what Information Pushes should be included in the response. This is usually used in combination with `include`, and is an \"all of\" search.
     * @summary Show Information Notices
     * @param {string} [require] Tags to include (comma-separated). All of the tags needs to be present.
     * @param {string} [include] Tags to include (comma-separated). Any of the tags needs to be present.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getInfoPush(require?: string, include?: string, options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).getInfoPush(require, include, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches the JavaScript code to the frontend React website.
     * @summary Download JavaScript
     * @param {'public' | 'internal'} [variant] Specifies which &#x60;variant&#x60; of the site. Public is the end-user site, while &#x60;internal&#x60; is the staff-only site with special pages for moderation and management.
     * @param {string} [branch] Specifies which git branch the site should load frontend source code from.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getJavaScript(variant?: 'public' | 'internal', branch?: string, options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).getJavaScript(variant, branch, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the current time of the API server.  **NOTE:** The response type is not a JSON object, but a simple JSON string.
     * @summary Current System Time
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemApi
     */
    public getSystemTime(options?: AxiosRequestConfig) {
        return SystemApiFp(this.configuration).getSystemTime(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get public user information about a specific user using their ID.
         * @summary Get User by ID
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUser', 'userId', userId)
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get public user information about a specific user using their name.
         * @summary Get User by Username
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserByName: async (username: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            assertParamExists('getUserByName', 'username', username)
            const localVarPath = `/users/{username}/name`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search and list any users by text query
         * @summary Search All Users
         * @param {string} [search] Searches by &#x60;displayName&#x60;. Will return empty array if search query is empty or missing.
         * @param {string} [developerType] Active user by developer type, none for normal users and internal for moderators
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchUsers: async (search?: string, developerType?: string, n?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (developerType !== undefined) {
                localVarQueryParameter['developerType'] = developerType;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a users information such as the email and birthday.
         * @summary Update User Info
         * @param {string} userId 
         * @param {UpdateUserRequest} [updateUserRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser: async (userId: string, updateUserRequest?: UpdateUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateUser', 'userId', userId)
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * Get public user information about a specific user using their ID.
         * @summary Get User by ID
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get public user information about a specific user using their name.
         * @summary Get User by Username
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserByName(username: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserByName(username, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search and list any users by text query
         * @summary Search All Users
         * @param {string} [search] Searches by &#x60;displayName&#x60;. Will return empty array if search query is empty or missing.
         * @param {string} [developerType] Active user by developer type, none for normal users and internal for moderators
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchUsers(search?: string, developerType?: string, n?: number, offset?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LimitedUser>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchUsers(search, developerType, n, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a users information such as the email and birthday.
         * @summary Update User Info
         * @param {string} userId 
         * @param {UpdateUserRequest} [updateUserRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUser(userId: string, updateUserRequest?: UpdateUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CurrentUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUser(userId, updateUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * Get public user information about a specific user using their ID.
         * @summary Get User by ID
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(userId: string, options?: any): AxiosPromise<User> {
            return localVarFp.getUser(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get public user information about a specific user using their name.
         * @summary Get User by Username
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserByName(username: string, options?: any): AxiosPromise<User> {
            return localVarFp.getUserByName(username, options).then((request) => request(axios, basePath));
        },
        /**
         * Search and list any users by text query
         * @summary Search All Users
         * @param {string} [search] Searches by &#x60;displayName&#x60;. Will return empty array if search query is empty or missing.
         * @param {string} [developerType] Active user by developer type, none for normal users and internal for moderators
         * @param {number} [n] The number of objects to return.
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchUsers(search?: string, developerType?: string, n?: number, offset?: number, options?: any): AxiosPromise<Array<LimitedUser>> {
            return localVarFp.searchUsers(search, developerType, n, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a users information such as the email and birthday.
         * @summary Update User Info
         * @param {string} userId 
         * @param {UpdateUserRequest} [updateUserRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser(userId: string, updateUserRequest?: UpdateUserRequest, options?: any): AxiosPromise<CurrentUser> {
            return localVarFp.updateUser(userId, updateUserRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Get public user information about a specific user using their ID.
     * @summary Get User by ID
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUser(userId: string, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).getUser(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get public user information about a specific user using their name.
     * @summary Get User by Username
     * @param {string} username 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUserByName(username: string, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).getUserByName(username, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search and list any users by text query
     * @summary Search All Users
     * @param {string} [search] Searches by &#x60;displayName&#x60;. Will return empty array if search query is empty or missing.
     * @param {string} [developerType] Active user by developer type, none for normal users and internal for moderators
     * @param {number} [n] The number of objects to return.
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public searchUsers(search?: string, developerType?: string, n?: number, offset?: number, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).searchUsers(search, developerType, n, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a users information such as the email and birthday.
     * @summary Update User Info
     * @param {string} userId 
     * @param {UpdateUserRequest} [updateUserRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public updateUser(userId: string, updateUserRequest?: UpdateUserRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).updateUser(userId, updateUserRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * WorldsApi - axios parameter creator
 * @export
 */
export const WorldsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new world. This endpoint requires `assetUrl` to be a valid File object with `.vrcw` file extension, and `imageUrl` to be a valid File object with an image file extension.
         * @summary Create World
         * @param {CreateWorldRequest} [createWorldRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWorld: async (createWorldRequest?: CreateWorldRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/worlds`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createWorldRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a world. Notice a world is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The WorldID is permanently reserved.
         * @summary Delete World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWorld: async (worldId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('deleteWorld', 'worldId', worldId)
            const localVarPath = `/worlds/{worldId}`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search and list currently Active worlds by query filters.
         * @summary List Active Worlds
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActiveWorlds: async (featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/worlds/active`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (featured !== undefined) {
                localVarQueryParameter['featured'] = featured;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (notag !== undefined) {
                localVarQueryParameter['notag'] = notag;
            }

            if (releaseStatus !== undefined) {
                localVarQueryParameter['releaseStatus'] = releaseStatus;
            }

            if (maxUnityVersion !== undefined) {
                localVarQueryParameter['maxUnityVersion'] = maxUnityVersion;
            }

            if (minUnityVersion !== undefined) {
                localVarQueryParameter['minUnityVersion'] = minUnityVersion;
            }

            if (platform !== undefined) {
                localVarQueryParameter['platform'] = platform;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search and list favorited worlds by query filters.
         * @summary List Favorited Worlds
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoritedWorlds: async (featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/worlds/favorites`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (featured !== undefined) {
                localVarQueryParameter['featured'] = featured;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (notag !== undefined) {
                localVarQueryParameter['notag'] = notag;
            }

            if (releaseStatus !== undefined) {
                localVarQueryParameter['releaseStatus'] = releaseStatus;
            }

            if (maxUnityVersion !== undefined) {
                localVarQueryParameter['maxUnityVersion'] = maxUnityVersion;
            }

            if (minUnityVersion !== undefined) {
                localVarQueryParameter['minUnityVersion'] = minUnityVersion;
            }

            if (platform !== undefined) {
                localVarQueryParameter['platform'] = platform;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search and list recently visited worlds by query filters.
         * @summary List Recent Worlds
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecentWorlds: async (featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/worlds/recent`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (featured !== undefined) {
                localVarQueryParameter['featured'] = featured;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (notag !== undefined) {
                localVarQueryParameter['notag'] = notag;
            }

            if (releaseStatus !== undefined) {
                localVarQueryParameter['releaseStatus'] = releaseStatus;
            }

            if (maxUnityVersion !== undefined) {
                localVarQueryParameter['maxUnityVersion'] = maxUnityVersion;
            }

            if (minUnityVersion !== undefined) {
                localVarQueryParameter['minUnityVersion'] = minUnityVersion;
            }

            if (platform !== undefined) {
                localVarQueryParameter['platform'] = platform;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get information about a specific World.
         * @summary Get World by ID
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorld: async (worldId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('getWorld', 'worldId', worldId)
            const localVarPath = `/worlds/{worldId}`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a worlds instance.
         * @summary Get World Instance
         * @param {string} worldId 
         * @param {string} instanceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorldInstance: async (worldId: string, instanceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('getWorldInstance', 'worldId', worldId)
            // verify required parameter 'instanceId' is not null or undefined
            assertParamExists('getWorldInstance', 'instanceId', instanceId)
            const localVarPath = `/worlds/{worldId}/{instanceId}`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)))
                .replace(`{${"instanceId"}}`, encodeURIComponent(String(instanceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Return a worlds custom metadata. This is currently believed to be unused. Metadata can be set with `updateWorld` and can be any arbitrary object.
         * @summary Get World Metadata
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getWorldMetadata: async (worldId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('getWorldMetadata', 'worldId', worldId)
            const localVarPath = `/worlds/{worldId}/metadata`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a worlds publish status.
         * @summary Get World Publish Status
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorldPublishStatus: async (worldId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('getWorldPublishStatus', 'worldId', worldId)
            const localVarPath = `/worlds/{worldId}/publish`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Publish a world. You can only publish one world per week.
         * @summary Publish World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishWorld: async (worldId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('publishWorld', 'worldId', worldId)
            const localVarPath = `/worlds/{worldId}/publish`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search and list any worlds by query filters.
         * @summary Search All Worlds
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {'me'} [user] Set to &#x60;me&#x60; for searching own worlds.
         * @param {string} [userId] Filter by UserID.
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchWorlds: async (featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', user?: 'me', userId?: string, n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/worlds`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required

            if (featured !== undefined) {
                localVarQueryParameter['featured'] = featured;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (n !== undefined) {
                localVarQueryParameter['n'] = n;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (notag !== undefined) {
                localVarQueryParameter['notag'] = notag;
            }

            if (releaseStatus !== undefined) {
                localVarQueryParameter['releaseStatus'] = releaseStatus;
            }

            if (maxUnityVersion !== undefined) {
                localVarQueryParameter['maxUnityVersion'] = maxUnityVersion;
            }

            if (minUnityVersion !== undefined) {
                localVarQueryParameter['minUnityVersion'] = minUnityVersion;
            }

            if (platform !== undefined) {
                localVarQueryParameter['platform'] = platform;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Unpublish a world.
         * @summary Unpublish World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unpublishWorld: async (worldId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('unpublishWorld', 'worldId', worldId)
            const localVarPath = `/worlds/{worldId}/publish`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update information about a specific World.
         * @summary Update World
         * @param {string} worldId 
         * @param {UpdateWorldRequest} [updateWorldRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWorld: async (worldId: string, updateWorldRequest?: UpdateWorldRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'worldId' is not null or undefined
            assertParamExists('updateWorld', 'worldId', worldId)
            const localVarPath = `/worlds/{worldId}`
                .replace(`{${"worldId"}}`, encodeURIComponent(String(worldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyCookie required

            // authentication authCookie required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateWorldRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WorldsApi - functional programming interface
 * @export
 */
export const WorldsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WorldsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new world. This endpoint requires `assetUrl` to be a valid File object with `.vrcw` file extension, and `imageUrl` to be a valid File object with an image file extension.
         * @summary Create World
         * @param {CreateWorldRequest} [createWorldRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createWorld(createWorldRequest?: CreateWorldRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<World>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createWorld(createWorldRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a world. Notice a world is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The WorldID is permanently reserved.
         * @summary Delete World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteWorld(worldId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteWorld(worldId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search and list currently Active worlds by query filters.
         * @summary List Active Worlds
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getActiveWorlds(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LimitedWorld>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getActiveWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search and list favorited worlds by query filters.
         * @summary List Favorited Worlds
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFavoritedWorlds(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LimitedWorld>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFavoritedWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search and list recently visited worlds by query filters.
         * @summary List Recent Worlds
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecentWorlds(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LimitedWorld>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecentWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get information about a specific World.
         * @summary Get World by ID
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorld(worldId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<World>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorld(worldId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a worlds instance.
         * @summary Get World Instance
         * @param {string} worldId 
         * @param {string} instanceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorldInstance(worldId: string, instanceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Instance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorldInstance(worldId, instanceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Return a worlds custom metadata. This is currently believed to be unused. Metadata can be set with `updateWorld` and can be any arbitrary object.
         * @summary Get World Metadata
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async getWorldMetadata(worldId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorldMetadata>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorldMetadata(worldId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a worlds publish status.
         * @summary Get World Publish Status
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorldPublishStatus(worldId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorldPublishStatus>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorldPublishStatus(worldId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Publish a world. You can only publish one world per week.
         * @summary Publish World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async publishWorld(worldId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.publishWorld(worldId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Search and list any worlds by query filters.
         * @summary Search All Worlds
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {'me'} [user] Set to &#x60;me&#x60; for searching own worlds.
         * @param {string} [userId] Filter by UserID.
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchWorlds(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', user?: 'me', userId?: string, n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LimitedWorld>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchWorlds(featured, sort, user, userId, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Unpublish a world.
         * @summary Unpublish World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unpublishWorld(worldId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unpublishWorld(worldId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update information about a specific World.
         * @summary Update World
         * @param {string} worldId 
         * @param {UpdateWorldRequest} [updateWorldRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateWorld(worldId: string, updateWorldRequest?: UpdateWorldRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<World>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWorld(worldId, updateWorldRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WorldsApi - factory interface
 * @export
 */
export const WorldsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WorldsApiFp(configuration)
    return {
        /**
         * Create a new world. This endpoint requires `assetUrl` to be a valid File object with `.vrcw` file extension, and `imageUrl` to be a valid File object with an image file extension.
         * @summary Create World
         * @param {CreateWorldRequest} [createWorldRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWorld(createWorldRequest?: CreateWorldRequest, options?: any): AxiosPromise<World> {
            return localVarFp.createWorld(createWorldRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a world. Notice a world is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The WorldID is permanently reserved.
         * @summary Delete World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWorld(worldId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteWorld(worldId, options).then((request) => request(axios, basePath));
        },
        /**
         * Search and list currently Active worlds by query filters.
         * @summary List Active Worlds
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getActiveWorlds(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: any): AxiosPromise<Array<LimitedWorld>> {
            return localVarFp.getActiveWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options).then((request) => request(axios, basePath));
        },
        /**
         * Search and list favorited worlds by query filters.
         * @summary List Favorited Worlds
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoritedWorlds(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: any): AxiosPromise<Array<LimitedWorld>> {
            return localVarFp.getFavoritedWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Search and list recently visited worlds by query filters.
         * @summary List Recent Worlds
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {string} [userId] Target user to see information on, admin-only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecentWorlds(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: any): AxiosPromise<Array<LimitedWorld>> {
            return localVarFp.getRecentWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about a specific World.
         * @summary Get World by ID
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorld(worldId: string, options?: any): AxiosPromise<World> {
            return localVarFp.getWorld(worldId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a worlds instance.
         * @summary Get World Instance
         * @param {string} worldId 
         * @param {string} instanceId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorldInstance(worldId: string, instanceId: string, options?: any): AxiosPromise<Instance> {
            return localVarFp.getWorldInstance(worldId, instanceId, options).then((request) => request(axios, basePath));
        },
        /**
         * Return a worlds custom metadata. This is currently believed to be unused. Metadata can be set with `updateWorld` and can be any arbitrary object.
         * @summary Get World Metadata
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getWorldMetadata(worldId: string, options?: any): AxiosPromise<WorldMetadata> {
            return localVarFp.getWorldMetadata(worldId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a worlds publish status.
         * @summary Get World Publish Status
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorldPublishStatus(worldId: string, options?: any): AxiosPromise<WorldPublishStatus> {
            return localVarFp.getWorldPublishStatus(worldId, options).then((request) => request(axios, basePath));
        },
        /**
         * Publish a world. You can only publish one world per week.
         * @summary Publish World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishWorld(worldId: string, options?: any): AxiosPromise<void> {
            return localVarFp.publishWorld(worldId, options).then((request) => request(axios, basePath));
        },
        /**
         * Search and list any worlds by query filters.
         * @summary Search All Worlds
         * @param {boolean} [featured] Filters on featured results.
         * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
         * @param {'me'} [user] Set to &#x60;me&#x60; for searching own worlds.
         * @param {string} [userId] Filter by UserID.
         * @param {number} [n] The number of objects to return.
         * @param {'ascending' | 'descending'} [order] 
         * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
         * @param {string} [search] Filters by world name.
         * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
         * @param {string} [notag] Tags to exclude (comma-separated).
         * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
         * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
         * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
         * @param {string} [platform] The platform the asset supports.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchWorlds(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', user?: 'me', userId?: string, n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: any): AxiosPromise<Array<LimitedWorld>> {
            return localVarFp.searchWorlds(featured, sort, user, userId, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options).then((request) => request(axios, basePath));
        },
        /**
         * Unpublish a world.
         * @summary Unpublish World
         * @param {string} worldId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unpublishWorld(worldId: string, options?: any): AxiosPromise<void> {
            return localVarFp.unpublishWorld(worldId, options).then((request) => request(axios, basePath));
        },
        /**
         * Update information about a specific World.
         * @summary Update World
         * @param {string} worldId 
         * @param {UpdateWorldRequest} [updateWorldRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWorld(worldId: string, updateWorldRequest?: UpdateWorldRequest, options?: any): AxiosPromise<World> {
            return localVarFp.updateWorld(worldId, updateWorldRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WorldsApi - object-oriented interface
 * @export
 * @class WorldsApi
 * @extends {BaseAPI}
 */
export class WorldsApi extends BaseAPI {
    /**
     * Create a new world. This endpoint requires `assetUrl` to be a valid File object with `.vrcw` file extension, and `imageUrl` to be a valid File object with an image file extension.
     * @summary Create World
     * @param {CreateWorldRequest} [createWorldRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public createWorld(createWorldRequest?: CreateWorldRequest, options?: AxiosRequestConfig) {
        return WorldsApiFp(this.configuration).createWorld(createWorldRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a world. Notice a world is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The WorldID is permanently reserved.
     * @summary Delete World
     * @param {string} worldId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public deleteWorld(worldId: string, options?: AxiosRequestConfig) {
        return WorldsApiFp(this.configuration).deleteWorld(worldId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search and list currently Active worlds by query filters.
     * @summary List Active Worlds
     * @param {boolean} [featured] Filters on featured results.
     * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
     * @param {number} [n] The number of objects to return.
     * @param {'ascending' | 'descending'} [order] 
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {string} [search] Filters by world name.
     * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
     * @param {string} [notag] Tags to exclude (comma-separated).
     * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
     * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
     * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
     * @param {string} [platform] The platform the asset supports.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public getActiveWorlds(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: AxiosRequestConfig) {
        return WorldsApiFp(this.configuration).getActiveWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search and list favorited worlds by query filters.
     * @summary List Favorited Worlds
     * @param {boolean} [featured] Filters on featured results.
     * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
     * @param {number} [n] The number of objects to return.
     * @param {'ascending' | 'descending'} [order] 
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {string} [search] Filters by world name.
     * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
     * @param {string} [notag] Tags to exclude (comma-separated).
     * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
     * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
     * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
     * @param {string} [platform] The platform the asset supports.
     * @param {string} [userId] Target user to see information on, admin-only.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public getFavoritedWorlds(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: AxiosRequestConfig) {
        return WorldsApiFp(this.configuration).getFavoritedWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search and list recently visited worlds by query filters.
     * @summary List Recent Worlds
     * @param {boolean} [featured] Filters on featured results.
     * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
     * @param {number} [n] The number of objects to return.
     * @param {'ascending' | 'descending'} [order] 
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {string} [search] Filters by world name.
     * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
     * @param {string} [notag] Tags to exclude (comma-separated).
     * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
     * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
     * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
     * @param {string} [platform] The platform the asset supports.
     * @param {string} [userId] Target user to see information on, admin-only.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public getRecentWorlds(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, userId?: string, options?: AxiosRequestConfig) {
        return WorldsApiFp(this.configuration).getRecentWorlds(featured, sort, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get information about a specific World.
     * @summary Get World by ID
     * @param {string} worldId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public getWorld(worldId: string, options?: AxiosRequestConfig) {
        return WorldsApiFp(this.configuration).getWorld(worldId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a worlds instance.
     * @summary Get World Instance
     * @param {string} worldId 
     * @param {string} instanceId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public getWorldInstance(worldId: string, instanceId: string, options?: AxiosRequestConfig) {
        return WorldsApiFp(this.configuration).getWorldInstance(worldId, instanceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Return a worlds custom metadata. This is currently believed to be unused. Metadata can be set with `updateWorld` and can be any arbitrary object.
     * @summary Get World Metadata
     * @param {string} worldId 
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public getWorldMetadata(worldId: string, options?: AxiosRequestConfig) {
        return WorldsApiFp(this.configuration).getWorldMetadata(worldId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a worlds publish status.
     * @summary Get World Publish Status
     * @param {string} worldId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public getWorldPublishStatus(worldId: string, options?: AxiosRequestConfig) {
        return WorldsApiFp(this.configuration).getWorldPublishStatus(worldId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Publish a world. You can only publish one world per week.
     * @summary Publish World
     * @param {string} worldId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public publishWorld(worldId: string, options?: AxiosRequestConfig) {
        return WorldsApiFp(this.configuration).publishWorld(worldId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Search and list any worlds by query filters.
     * @summary Search All Worlds
     * @param {boolean} [featured] Filters on featured results.
     * @param {'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name'} [sort] 
     * @param {'me'} [user] Set to &#x60;me&#x60; for searching own worlds.
     * @param {string} [userId] Filter by UserID.
     * @param {number} [n] The number of objects to return.
     * @param {'ascending' | 'descending'} [order] 
     * @param {number} [offset] A zero-based offset from the default object sorting from where search results start.
     * @param {string} [search] Filters by world name.
     * @param {string} [tag] Tags to include (comma-separated). Any of the tags needs to be present.
     * @param {string} [notag] Tags to exclude (comma-separated).
     * @param {'public' | 'private' | 'hidden' | 'all'} [releaseStatus] Filter by ReleaseStatus.
     * @param {string} [maxUnityVersion] The maximum Unity version supported by the asset.
     * @param {string} [minUnityVersion] The minimum Unity version supported by the asset.
     * @param {string} [platform] The platform the asset supports.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public searchWorlds(featured?: boolean, sort?: 'popularity' | 'heat' | 'trust' | 'shuffle' | 'random' | 'favorites' | 'reportScore' | 'reportCount' | 'publicationDate' | 'labsPublicationDate' | 'created' | '_created_at' | 'updated' | '_updated_at' | 'order' | 'relevance' | 'magic' | 'name', user?: 'me', userId?: string, n?: number, order?: 'ascending' | 'descending', offset?: number, search?: string, tag?: string, notag?: string, releaseStatus?: 'public' | 'private' | 'hidden' | 'all', maxUnityVersion?: string, minUnityVersion?: string, platform?: string, options?: AxiosRequestConfig) {
        return WorldsApiFp(this.configuration).searchWorlds(featured, sort, user, userId, n, order, offset, search, tag, notag, releaseStatus, maxUnityVersion, minUnityVersion, platform, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unpublish a world.
     * @summary Unpublish World
     * @param {string} worldId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public unpublishWorld(worldId: string, options?: AxiosRequestConfig) {
        return WorldsApiFp(this.configuration).unpublishWorld(worldId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update information about a specific World.
     * @summary Update World
     * @param {string} worldId 
     * @param {UpdateWorldRequest} [updateWorldRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorldsApi
     */
    public updateWorld(worldId: string, updateWorldRequest?: UpdateWorldRequest, options?: AxiosRequestConfig) {
        return WorldsApiFp(this.configuration).updateWorld(worldId, updateWorldRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


