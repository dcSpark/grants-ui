export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
    ID: string;
    /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
    String: string;
    /** The `Boolean` scalar type represents `true` or `false`. */
    Boolean: boolean;
    /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
    Int: number;
    /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
    Float: number;
    /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Date: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
};
export declare type File = Node & {
    sourceInstanceName: Scalars["String"];
    absolutePath: Scalars["String"];
    relativePath: Scalars["String"];
    extension: Scalars["String"];
    size: Scalars["Int"];
    prettySize: Scalars["String"];
    modifiedTime: Scalars["Date"];
    accessTime: Scalars["Date"];
    changeTime: Scalars["Date"];
    birthTime: Scalars["Date"];
    root: Scalars["String"];
    dir: Scalars["String"];
    base: Scalars["String"];
    ext: Scalars["String"];
    name: Scalars["String"];
    relativeDirectory: Scalars["String"];
    dev: Scalars["Int"];
    mode: Scalars["Int"];
    nlink: Scalars["Int"];
    uid: Scalars["Int"];
    gid: Scalars["Int"];
    rdev: Scalars["Int"];
    ino: Scalars["Float"];
    atimeMs: Scalars["Float"];
    mtimeMs: Scalars["Float"];
    ctimeMs: Scalars["Float"];
    atime: Scalars["Date"];
    mtime: Scalars["Date"];
    ctime: Scalars["Date"];
    /** @deprecated Use `birthTime` instead */
    birthtime?: Maybe<Scalars["Date"]>;
    /** @deprecated Use `birthTime` instead */
    birthtimeMs?: Maybe<Scalars["Float"]>;
    blksize?: Maybe<Scalars["Int"]>;
    blocks?: Maybe<Scalars["Int"]>;
    /** Copy file to static directory and return public url to it */
    publicURL?: Maybe<Scalars["String"]>;
    /** Returns all children nodes filtered by type ImageSharp */
    childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
    /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
    childImageSharp?: Maybe<ImageSharp>;
    /** Returns all children nodes filtered by type Locale */
    childrenLocale?: Maybe<Array<Maybe<Locale>>>;
    /** Returns the first child node of type Locale or null if there are no children of given type on this node */
    childLocale?: Maybe<Locale>;
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};
export declare type FileModifiedTimeArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type FileAccessTimeArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type FileChangeTimeArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type FileBirthTimeArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type FileAtimeArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type FileMtimeArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type FileCtimeArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
/** Node Interface */
export declare type Node = {
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};
export declare type Internal = {
    content?: Maybe<Scalars["String"]>;
    contentDigest: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>;
    ignoreType?: Maybe<Scalars["Boolean"]>;
    mediaType?: Maybe<Scalars["String"]>;
    owner: Scalars["String"];
    type: Scalars["String"];
};
export declare type Directory = Node & {
    sourceInstanceName: Scalars["String"];
    absolutePath: Scalars["String"];
    relativePath: Scalars["String"];
    extension: Scalars["String"];
    size: Scalars["Int"];
    prettySize: Scalars["String"];
    modifiedTime: Scalars["Date"];
    accessTime: Scalars["Date"];
    changeTime: Scalars["Date"];
    birthTime: Scalars["Date"];
    root: Scalars["String"];
    dir: Scalars["String"];
    base: Scalars["String"];
    ext: Scalars["String"];
    name: Scalars["String"];
    relativeDirectory: Scalars["String"];
    dev: Scalars["Int"];
    mode: Scalars["Int"];
    nlink: Scalars["Int"];
    uid: Scalars["Int"];
    gid: Scalars["Int"];
    rdev: Scalars["Int"];
    ino: Scalars["Float"];
    atimeMs: Scalars["Float"];
    mtimeMs: Scalars["Float"];
    ctimeMs: Scalars["Float"];
    atime: Scalars["Date"];
    mtime: Scalars["Date"];
    ctime: Scalars["Date"];
    /** @deprecated Use `birthTime` instead */
    birthtime?: Maybe<Scalars["Date"]>;
    /** @deprecated Use `birthTime` instead */
    birthtimeMs?: Maybe<Scalars["Float"]>;
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};
export declare type DirectoryModifiedTimeArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type DirectoryAccessTimeArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type DirectoryChangeTimeArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type DirectoryBirthTimeArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type DirectoryAtimeArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type DirectoryMtimeArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type DirectoryCtimeArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type Site = Node & {
    buildTime?: Maybe<Scalars["Date"]>;
    siteMetadata?: Maybe<SiteSiteMetadata>;
    port?: Maybe<Scalars["Int"]>;
    host?: Maybe<Scalars["String"]>;
    polyfill?: Maybe<Scalars["Boolean"]>;
    pathPrefix?: Maybe<Scalars["String"]>;
    jsxRuntime?: Maybe<Scalars["String"]>;
    trailingSlash?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};
export declare type SiteBuildTimeArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type SiteSiteMetadata = {
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    siteUrl?: Maybe<Scalars["String"]>;
};
export declare type SiteFunction = Node & {
    functionRoute: Scalars["String"];
    pluginName: Scalars["String"];
    originalAbsoluteFilePath: Scalars["String"];
    originalRelativeFilePath: Scalars["String"];
    relativeCompiledFilePath: Scalars["String"];
    absoluteCompiledFilePath: Scalars["String"];
    matchPath?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};
export declare type SitePage = Node & {
    path: Scalars["String"];
    component: Scalars["String"];
    internalComponentName: Scalars["String"];
    componentChunkName: Scalars["String"];
    matchPath?: Maybe<Scalars["String"]>;
    pageContext?: Maybe<Scalars["JSON"]>;
    pluginCreator?: Maybe<SitePlugin>;
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};
export declare type SitePlugin = Node & {
    resolve?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    version?: Maybe<Scalars["String"]>;
    nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    pluginFilepath?: Maybe<Scalars["String"]>;
    pluginOptions?: Maybe<Scalars["JSON"]>;
    packageJson?: Maybe<Scalars["JSON"]>;
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};
export declare type SiteBuildMetadata = Node & {
    buildTime?: Maybe<Scalars["Date"]>;
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};
export declare type SiteBuildMetadataBuildTimeArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type GatsbyImageFormat = "NO_CHANGE" | "AUTO" | "JPG" | "PNG" | "WEBP" | "AVIF";
export declare type GatsbyImageLayout = "FIXED" | "FULL_WIDTH" | "CONSTRAINED";
export declare type GatsbyImagePlaceholder = "DOMINANT_COLOR" | "TRACED_SVG" | "BLURRED" | "NONE";
export declare type MdxFrontmatter = {
    title: Scalars["String"];
};
export declare type MdxHeadingMdx = {
    value?: Maybe<Scalars["String"]>;
    depth?: Maybe<Scalars["Int"]>;
};
export declare type HeadingsMdx = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export declare type MdxWordCount = {
    paragraphs?: Maybe<Scalars["Int"]>;
    sentences?: Maybe<Scalars["Int"]>;
    words?: Maybe<Scalars["Int"]>;
};
export declare type Mdx = Node & {
    rawBody: Scalars["String"];
    fileAbsolutePath: Scalars["String"];
    frontmatter?: Maybe<MdxFrontmatter>;
    slug?: Maybe<Scalars["String"]>;
    body: Scalars["String"];
    excerpt: Scalars["String"];
    headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
    html?: Maybe<Scalars["String"]>;
    mdxAST?: Maybe<Scalars["JSON"]>;
    tableOfContents?: Maybe<Scalars["JSON"]>;
    timeToRead?: Maybe<Scalars["Int"]>;
    wordCount?: Maybe<MdxWordCount>;
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};
export declare type MdxExcerptArgs = {
    pruneLength?: InputMaybe<Scalars["Int"]>;
    truncate?: InputMaybe<Scalars["Boolean"]>;
};
export declare type MdxHeadingsArgs = {
    depth?: InputMaybe<HeadingsMdx>;
};
export declare type MdxTableOfContentsArgs = {
    maxDepth?: InputMaybe<Scalars["Int"]>;
};
export declare type ImageFormat = "NO_CHANGE" | "AUTO" | "JPG" | "PNG" | "WEBP" | "AVIF";
export declare type ImageFit = "COVER" | "CONTAIN" | "FILL" | "INSIDE" | "OUTSIDE";
export declare type ImageLayout = "FIXED" | "FULL_WIDTH" | "CONSTRAINED";
export declare type ImageCropFocus = "CENTER" | "NORTH" | "NORTHEAST" | "EAST" | "SOUTHEAST" | "SOUTH" | "SOUTHWEST" | "WEST" | "NORTHWEST" | "ENTROPY" | "ATTENTION";
export declare type DuotoneGradient = {
    highlight: Scalars["String"];
    shadow: Scalars["String"];
    opacity?: InputMaybe<Scalars["Int"]>;
};
export declare type PotraceTurnPolicy = "TURNPOLICY_BLACK" | "TURNPOLICY_WHITE" | "TURNPOLICY_LEFT" | "TURNPOLICY_RIGHT" | "TURNPOLICY_MINORITY" | "TURNPOLICY_MAJORITY";
export declare type Potrace = {
    turnPolicy?: InputMaybe<PotraceTurnPolicy>;
    turdSize?: InputMaybe<Scalars["Float"]>;
    alphaMax?: InputMaybe<Scalars["Float"]>;
    optCurve?: InputMaybe<Scalars["Boolean"]>;
    optTolerance?: InputMaybe<Scalars["Float"]>;
    threshold?: InputMaybe<Scalars["Int"]>;
    blackOnWhite?: InputMaybe<Scalars["Boolean"]>;
    color?: InputMaybe<Scalars["String"]>;
    background?: InputMaybe<Scalars["String"]>;
};
export declare type ImageSharp = Node & {
    fixed?: Maybe<ImageSharpFixed>;
    fluid?: Maybe<ImageSharpFluid>;
    gatsbyImageData: Scalars["JSON"];
    original?: Maybe<ImageSharpOriginal>;
    resize?: Maybe<ImageSharpResize>;
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};
export declare type ImageSharpFixedArgs = {
    width?: InputMaybe<Scalars["Int"]>;
    height?: InputMaybe<Scalars["Int"]>;
    base64Width?: InputMaybe<Scalars["Int"]>;
    jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
    pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
    grayscale?: InputMaybe<Scalars["Boolean"]>;
    duotone?: InputMaybe<DuotoneGradient>;
    traceSVG?: InputMaybe<Potrace>;
    quality?: InputMaybe<Scalars["Int"]>;
    jpegQuality?: InputMaybe<Scalars["Int"]>;
    pngQuality?: InputMaybe<Scalars["Int"]>;
    webpQuality?: InputMaybe<Scalars["Int"]>;
    toFormat?: InputMaybe<ImageFormat>;
    toFormatBase64?: InputMaybe<ImageFormat>;
    cropFocus?: InputMaybe<ImageCropFocus>;
    fit?: InputMaybe<ImageFit>;
    background?: InputMaybe<Scalars["String"]>;
    rotate?: InputMaybe<Scalars["Int"]>;
    trim?: InputMaybe<Scalars["Float"]>;
};
export declare type ImageSharpFluidArgs = {
    maxWidth?: InputMaybe<Scalars["Int"]>;
    maxHeight?: InputMaybe<Scalars["Int"]>;
    base64Width?: InputMaybe<Scalars["Int"]>;
    grayscale?: InputMaybe<Scalars["Boolean"]>;
    jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
    pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
    duotone?: InputMaybe<DuotoneGradient>;
    traceSVG?: InputMaybe<Potrace>;
    quality?: InputMaybe<Scalars["Int"]>;
    jpegQuality?: InputMaybe<Scalars["Int"]>;
    pngQuality?: InputMaybe<Scalars["Int"]>;
    webpQuality?: InputMaybe<Scalars["Int"]>;
    toFormat?: InputMaybe<ImageFormat>;
    toFormatBase64?: InputMaybe<ImageFormat>;
    cropFocus?: InputMaybe<ImageCropFocus>;
    fit?: InputMaybe<ImageFit>;
    background?: InputMaybe<Scalars["String"]>;
    rotate?: InputMaybe<Scalars["Int"]>;
    trim?: InputMaybe<Scalars["Float"]>;
    sizes?: InputMaybe<Scalars["String"]>;
    srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};
export declare type ImageSharpGatsbyImageDataArgs = {
    layout?: InputMaybe<ImageLayout>;
    width?: InputMaybe<Scalars["Int"]>;
    height?: InputMaybe<Scalars["Int"]>;
    aspectRatio?: InputMaybe<Scalars["Float"]>;
    placeholder?: InputMaybe<ImagePlaceholder>;
    blurredOptions?: InputMaybe<BlurredOptions>;
    tracedSVGOptions?: InputMaybe<Potrace>;
    formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
    outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
    breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    sizes?: InputMaybe<Scalars["String"]>;
    quality?: InputMaybe<Scalars["Int"]>;
    jpgOptions?: InputMaybe<JpgOptions>;
    pngOptions?: InputMaybe<PngOptions>;
    webpOptions?: InputMaybe<WebPOptions>;
    avifOptions?: InputMaybe<AvifOptions>;
    transformOptions?: InputMaybe<TransformOptions>;
    backgroundColor?: InputMaybe<Scalars["String"]>;
};
export declare type ImageSharpResizeArgs = {
    width?: InputMaybe<Scalars["Int"]>;
    height?: InputMaybe<Scalars["Int"]>;
    quality?: InputMaybe<Scalars["Int"]>;
    jpegQuality?: InputMaybe<Scalars["Int"]>;
    pngQuality?: InputMaybe<Scalars["Int"]>;
    webpQuality?: InputMaybe<Scalars["Int"]>;
    jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
    pngCompressionLevel?: InputMaybe<Scalars["Int"]>;
    pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
    grayscale?: InputMaybe<Scalars["Boolean"]>;
    duotone?: InputMaybe<DuotoneGradient>;
    base64?: InputMaybe<Scalars["Boolean"]>;
    traceSVG?: InputMaybe<Potrace>;
    toFormat?: InputMaybe<ImageFormat>;
    cropFocus?: InputMaybe<ImageCropFocus>;
    fit?: InputMaybe<ImageFit>;
    background?: InputMaybe<Scalars["String"]>;
    rotate?: InputMaybe<Scalars["Int"]>;
    trim?: InputMaybe<Scalars["Float"]>;
};
export declare type ImageSharpFixed = {
    base64?: Maybe<Scalars["String"]>;
    tracedSVG?: Maybe<Scalars["String"]>;
    aspectRatio?: Maybe<Scalars["Float"]>;
    width: Scalars["Float"];
    height: Scalars["Float"];
    src: Scalars["String"];
    srcSet: Scalars["String"];
    srcWebp?: Maybe<Scalars["String"]>;
    srcSetWebp?: Maybe<Scalars["String"]>;
    originalName?: Maybe<Scalars["String"]>;
};
export declare type ImageSharpFluid = {
    base64?: Maybe<Scalars["String"]>;
    tracedSVG?: Maybe<Scalars["String"]>;
    aspectRatio: Scalars["Float"];
    src: Scalars["String"];
    srcSet: Scalars["String"];
    srcWebp?: Maybe<Scalars["String"]>;
    srcSetWebp?: Maybe<Scalars["String"]>;
    sizes: Scalars["String"];
    originalImg?: Maybe<Scalars["String"]>;
    originalName?: Maybe<Scalars["String"]>;
    presentationWidth: Scalars["Int"];
    presentationHeight: Scalars["Int"];
};
export declare type ImagePlaceholder = "DOMINANT_COLOR" | "TRACED_SVG" | "BLURRED" | "NONE";
export declare type BlurredOptions = {
    /** Width of the generated low-res preview. Default is 20px */
    width?: InputMaybe<Scalars["Int"]>;
    /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
    toFormat?: InputMaybe<ImageFormat>;
};
export declare type JpgOptions = {
    quality?: InputMaybe<Scalars["Int"]>;
    progressive?: InputMaybe<Scalars["Boolean"]>;
};
export declare type PngOptions = {
    quality?: InputMaybe<Scalars["Int"]>;
    compressionSpeed?: InputMaybe<Scalars["Int"]>;
};
export declare type WebPOptions = {
    quality?: InputMaybe<Scalars["Int"]>;
};
export declare type AvifOptions = {
    quality?: InputMaybe<Scalars["Int"]>;
    lossless?: InputMaybe<Scalars["Boolean"]>;
    speed?: InputMaybe<Scalars["Int"]>;
};
export declare type TransformOptions = {
    grayscale?: InputMaybe<Scalars["Boolean"]>;
    duotone?: InputMaybe<DuotoneGradient>;
    rotate?: InputMaybe<Scalars["Int"]>;
    trim?: InputMaybe<Scalars["Float"]>;
    cropFocus?: InputMaybe<ImageCropFocus>;
    fit?: InputMaybe<ImageFit>;
};
export declare type ImageSharpOriginal = {
    width?: Maybe<Scalars["Float"]>;
    height?: Maybe<Scalars["Float"]>;
    src?: Maybe<Scalars["String"]>;
};
export declare type ImageSharpResize = {
    src?: Maybe<Scalars["String"]>;
    tracedSVG?: Maybe<Scalars["String"]>;
    width?: Maybe<Scalars["Int"]>;
    height?: Maybe<Scalars["Int"]>;
    aspectRatio?: Maybe<Scalars["Float"]>;
    originalName?: Maybe<Scalars["String"]>;
};
export declare type Locale = Node & {
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    language?: Maybe<Scalars["String"]>;
    ns?: Maybe<Scalars["String"]>;
    data?: Maybe<Scalars["String"]>;
    fileAbsolutePath?: Maybe<Scalars["String"]>;
};
export declare type Airtable = Node & {
    id: Scalars["ID"];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    table?: Maybe<Scalars["String"]>;
    recordId?: Maybe<Scalars["String"]>;
    rowIndex?: Maybe<Scalars["Int"]>;
    data?: Maybe<AirtableData>;
};
export declare type AirtableData = {
    Beneficiary?: Maybe<Scalars["String"]>;
    Grant_origin?: Maybe<Scalars["String"]>;
    Project_name?: Maybe<Scalars["String"]>;
    Category?: Maybe<Scalars["String"]>;
    Status?: Maybe<Scalars["String"]>;
    Project_Lead?: Maybe<Scalars["String"]>;
    origin_link?: Maybe<Scalars["String"]>;
    Currency?: Maybe<Scalars["String"]>;
    Fund?: Maybe<Scalars["String"]>;
    Sub_beneficiary?: Maybe<Scalars["String"]>;
    USD_equivalent?: Maybe<Scalars["Int"]>;
    Last_Modified?: Maybe<Scalars["Date"]>;
    Funds_requested?: Maybe<Scalars["Int"]>;
    Started_on?: Maybe<Scalars["Date"]>;
    Completed_on?: Maybe<Scalars["Date"]>;
    Description?: Maybe<Scalars["String"]>;
    Status_title?: Maybe<Scalars["String"]>;
    Status_description?: Maybe<Scalars["String"]>;
    Status_desc_link1?: Maybe<Scalars["String"]>;
};
export declare type AirtableDataLast_ModifiedArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type AirtableDataStarted_OnArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type AirtableDataCompleted_OnArgs = {
    formatString?: InputMaybe<Scalars["String"]>;
    fromNow?: InputMaybe<Scalars["Boolean"]>;
    difference?: InputMaybe<Scalars["String"]>;
    locale?: InputMaybe<Scalars["String"]>;
};
export declare type Query = {
    file?: Maybe<File>;
    allFile: FileConnection;
    directory?: Maybe<Directory>;
    allDirectory: DirectoryConnection;
    site?: Maybe<Site>;
    allSite: SiteConnection;
    siteFunction?: Maybe<SiteFunction>;
    allSiteFunction: SiteFunctionConnection;
    sitePage?: Maybe<SitePage>;
    allSitePage: SitePageConnection;
    sitePlugin?: Maybe<SitePlugin>;
    allSitePlugin: SitePluginConnection;
    siteBuildMetadata?: Maybe<SiteBuildMetadata>;
    allSiteBuildMetadata: SiteBuildMetadataConnection;
    mdx?: Maybe<Mdx>;
    allMdx: MdxConnection;
    imageSharp?: Maybe<ImageSharp>;
    allImageSharp: ImageSharpConnection;
    locale?: Maybe<Locale>;
    allLocale: LocaleConnection;
    airtable?: Maybe<Airtable>;
    allAirtable: AirtableConnection;
};
export declare type QueryFileArgs = {
    sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
    absolutePath?: InputMaybe<StringQueryOperatorInput>;
    relativePath?: InputMaybe<StringQueryOperatorInput>;
    extension?: InputMaybe<StringQueryOperatorInput>;
    size?: InputMaybe<IntQueryOperatorInput>;
    prettySize?: InputMaybe<StringQueryOperatorInput>;
    modifiedTime?: InputMaybe<DateQueryOperatorInput>;
    accessTime?: InputMaybe<DateQueryOperatorInput>;
    changeTime?: InputMaybe<DateQueryOperatorInput>;
    birthTime?: InputMaybe<DateQueryOperatorInput>;
    root?: InputMaybe<StringQueryOperatorInput>;
    dir?: InputMaybe<StringQueryOperatorInput>;
    base?: InputMaybe<StringQueryOperatorInput>;
    ext?: InputMaybe<StringQueryOperatorInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
    relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
    dev?: InputMaybe<IntQueryOperatorInput>;
    mode?: InputMaybe<IntQueryOperatorInput>;
    nlink?: InputMaybe<IntQueryOperatorInput>;
    uid?: InputMaybe<IntQueryOperatorInput>;
    gid?: InputMaybe<IntQueryOperatorInput>;
    rdev?: InputMaybe<IntQueryOperatorInput>;
    ino?: InputMaybe<FloatQueryOperatorInput>;
    atimeMs?: InputMaybe<FloatQueryOperatorInput>;
    mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
    ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
    atime?: InputMaybe<DateQueryOperatorInput>;
    mtime?: InputMaybe<DateQueryOperatorInput>;
    ctime?: InputMaybe<DateQueryOperatorInput>;
    birthtime?: InputMaybe<DateQueryOperatorInput>;
    birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
    blksize?: InputMaybe<IntQueryOperatorInput>;
    blocks?: InputMaybe<IntQueryOperatorInput>;
    publicURL?: InputMaybe<StringQueryOperatorInput>;
    childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
    childImageSharp?: InputMaybe<ImageSharpFilterInput>;
    childrenLocale?: InputMaybe<LocaleFilterListInput>;
    childLocale?: InputMaybe<LocaleFilterInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type QueryAllFileArgs = {
    filter?: InputMaybe<FileFilterInput>;
    sort?: InputMaybe<FileSortInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
};
export declare type QueryDirectoryArgs = {
    sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
    absolutePath?: InputMaybe<StringQueryOperatorInput>;
    relativePath?: InputMaybe<StringQueryOperatorInput>;
    extension?: InputMaybe<StringQueryOperatorInput>;
    size?: InputMaybe<IntQueryOperatorInput>;
    prettySize?: InputMaybe<StringQueryOperatorInput>;
    modifiedTime?: InputMaybe<DateQueryOperatorInput>;
    accessTime?: InputMaybe<DateQueryOperatorInput>;
    changeTime?: InputMaybe<DateQueryOperatorInput>;
    birthTime?: InputMaybe<DateQueryOperatorInput>;
    root?: InputMaybe<StringQueryOperatorInput>;
    dir?: InputMaybe<StringQueryOperatorInput>;
    base?: InputMaybe<StringQueryOperatorInput>;
    ext?: InputMaybe<StringQueryOperatorInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
    relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
    dev?: InputMaybe<IntQueryOperatorInput>;
    mode?: InputMaybe<IntQueryOperatorInput>;
    nlink?: InputMaybe<IntQueryOperatorInput>;
    uid?: InputMaybe<IntQueryOperatorInput>;
    gid?: InputMaybe<IntQueryOperatorInput>;
    rdev?: InputMaybe<IntQueryOperatorInput>;
    ino?: InputMaybe<FloatQueryOperatorInput>;
    atimeMs?: InputMaybe<FloatQueryOperatorInput>;
    mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
    ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
    atime?: InputMaybe<DateQueryOperatorInput>;
    mtime?: InputMaybe<DateQueryOperatorInput>;
    ctime?: InputMaybe<DateQueryOperatorInput>;
    birthtime?: InputMaybe<DateQueryOperatorInput>;
    birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type QueryAllDirectoryArgs = {
    filter?: InputMaybe<DirectoryFilterInput>;
    sort?: InputMaybe<DirectorySortInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
};
export declare type QuerySiteArgs = {
    buildTime?: InputMaybe<DateQueryOperatorInput>;
    siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
    port?: InputMaybe<IntQueryOperatorInput>;
    host?: InputMaybe<StringQueryOperatorInput>;
    polyfill?: InputMaybe<BooleanQueryOperatorInput>;
    pathPrefix?: InputMaybe<StringQueryOperatorInput>;
    jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
    trailingSlash?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type QueryAllSiteArgs = {
    filter?: InputMaybe<SiteFilterInput>;
    sort?: InputMaybe<SiteSortInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
};
export declare type QuerySiteFunctionArgs = {
    functionRoute?: InputMaybe<StringQueryOperatorInput>;
    pluginName?: InputMaybe<StringQueryOperatorInput>;
    originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
    originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
    relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
    absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
    matchPath?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type QueryAllSiteFunctionArgs = {
    filter?: InputMaybe<SiteFunctionFilterInput>;
    sort?: InputMaybe<SiteFunctionSortInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
};
export declare type QuerySitePageArgs = {
    path?: InputMaybe<StringQueryOperatorInput>;
    component?: InputMaybe<StringQueryOperatorInput>;
    internalComponentName?: InputMaybe<StringQueryOperatorInput>;
    componentChunkName?: InputMaybe<StringQueryOperatorInput>;
    matchPath?: InputMaybe<StringQueryOperatorInput>;
    pageContext?: InputMaybe<JsonQueryOperatorInput>;
    pluginCreator?: InputMaybe<SitePluginFilterInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type QueryAllSitePageArgs = {
    filter?: InputMaybe<SitePageFilterInput>;
    sort?: InputMaybe<SitePageSortInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
};
export declare type QuerySitePluginArgs = {
    resolve?: InputMaybe<StringQueryOperatorInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
    version?: InputMaybe<StringQueryOperatorInput>;
    nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
    browserAPIs?: InputMaybe<StringQueryOperatorInput>;
    ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
    pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
    pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
    packageJson?: InputMaybe<JsonQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type QueryAllSitePluginArgs = {
    filter?: InputMaybe<SitePluginFilterInput>;
    sort?: InputMaybe<SitePluginSortInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
};
export declare type QuerySiteBuildMetadataArgs = {
    buildTime?: InputMaybe<DateQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type QueryAllSiteBuildMetadataArgs = {
    filter?: InputMaybe<SiteBuildMetadataFilterInput>;
    sort?: InputMaybe<SiteBuildMetadataSortInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
};
export declare type QueryMdxArgs = {
    rawBody?: InputMaybe<StringQueryOperatorInput>;
    fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
    frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
    slug?: InputMaybe<StringQueryOperatorInput>;
    body?: InputMaybe<StringQueryOperatorInput>;
    excerpt?: InputMaybe<StringQueryOperatorInput>;
    headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
    html?: InputMaybe<StringQueryOperatorInput>;
    mdxAST?: InputMaybe<JsonQueryOperatorInput>;
    tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
    timeToRead?: InputMaybe<IntQueryOperatorInput>;
    wordCount?: InputMaybe<MdxWordCountFilterInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type QueryAllMdxArgs = {
    filter?: InputMaybe<MdxFilterInput>;
    sort?: InputMaybe<MdxSortInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
};
export declare type QueryImageSharpArgs = {
    fixed?: InputMaybe<ImageSharpFixedFilterInput>;
    fluid?: InputMaybe<ImageSharpFluidFilterInput>;
    gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
    original?: InputMaybe<ImageSharpOriginalFilterInput>;
    resize?: InputMaybe<ImageSharpResizeFilterInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type QueryAllImageSharpArgs = {
    filter?: InputMaybe<ImageSharpFilterInput>;
    sort?: InputMaybe<ImageSharpSortInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
};
export declare type QueryLocaleArgs = {
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
    language?: InputMaybe<StringQueryOperatorInput>;
    ns?: InputMaybe<StringQueryOperatorInput>;
    data?: InputMaybe<StringQueryOperatorInput>;
    fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
};
export declare type QueryAllLocaleArgs = {
    filter?: InputMaybe<LocaleFilterInput>;
    sort?: InputMaybe<LocaleSortInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
};
export declare type QueryAirtableArgs = {
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
    table?: InputMaybe<StringQueryOperatorInput>;
    recordId?: InputMaybe<StringQueryOperatorInput>;
    rowIndex?: InputMaybe<IntQueryOperatorInput>;
    data?: InputMaybe<AirtableDataFilterInput>;
};
export declare type QueryAllAirtableArgs = {
    filter?: InputMaybe<AirtableFilterInput>;
    sort?: InputMaybe<AirtableSortInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
};
export declare type StringQueryOperatorInput = {
    eq?: InputMaybe<Scalars["String"]>;
    ne?: InputMaybe<Scalars["String"]>;
    in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    nin?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    regex?: InputMaybe<Scalars["String"]>;
    glob?: InputMaybe<Scalars["String"]>;
};
export declare type IntQueryOperatorInput = {
    eq?: InputMaybe<Scalars["Int"]>;
    ne?: InputMaybe<Scalars["Int"]>;
    gt?: InputMaybe<Scalars["Int"]>;
    gte?: InputMaybe<Scalars["Int"]>;
    lt?: InputMaybe<Scalars["Int"]>;
    lte?: InputMaybe<Scalars["Int"]>;
    in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    nin?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};
export declare type DateQueryOperatorInput = {
    eq?: InputMaybe<Scalars["Date"]>;
    ne?: InputMaybe<Scalars["Date"]>;
    gt?: InputMaybe<Scalars["Date"]>;
    gte?: InputMaybe<Scalars["Date"]>;
    lt?: InputMaybe<Scalars["Date"]>;
    lte?: InputMaybe<Scalars["Date"]>;
    in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
    nin?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
};
export declare type FloatQueryOperatorInput = {
    eq?: InputMaybe<Scalars["Float"]>;
    ne?: InputMaybe<Scalars["Float"]>;
    gt?: InputMaybe<Scalars["Float"]>;
    gte?: InputMaybe<Scalars["Float"]>;
    lt?: InputMaybe<Scalars["Float"]>;
    lte?: InputMaybe<Scalars["Float"]>;
    in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
    nin?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};
export declare type ImageSharpFilterListInput = {
    elemMatch?: InputMaybe<ImageSharpFilterInput>;
};
export declare type ImageSharpFilterInput = {
    fixed?: InputMaybe<ImageSharpFixedFilterInput>;
    fluid?: InputMaybe<ImageSharpFluidFilterInput>;
    gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
    original?: InputMaybe<ImageSharpOriginalFilterInput>;
    resize?: InputMaybe<ImageSharpResizeFilterInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type ImageSharpFixedFilterInput = {
    base64?: InputMaybe<StringQueryOperatorInput>;
    tracedSVG?: InputMaybe<StringQueryOperatorInput>;
    aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
    width?: InputMaybe<FloatQueryOperatorInput>;
    height?: InputMaybe<FloatQueryOperatorInput>;
    src?: InputMaybe<StringQueryOperatorInput>;
    srcSet?: InputMaybe<StringQueryOperatorInput>;
    srcWebp?: InputMaybe<StringQueryOperatorInput>;
    srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
    originalName?: InputMaybe<StringQueryOperatorInput>;
};
export declare type ImageSharpFluidFilterInput = {
    base64?: InputMaybe<StringQueryOperatorInput>;
    tracedSVG?: InputMaybe<StringQueryOperatorInput>;
    aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
    src?: InputMaybe<StringQueryOperatorInput>;
    srcSet?: InputMaybe<StringQueryOperatorInput>;
    srcWebp?: InputMaybe<StringQueryOperatorInput>;
    srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
    sizes?: InputMaybe<StringQueryOperatorInput>;
    originalImg?: InputMaybe<StringQueryOperatorInput>;
    originalName?: InputMaybe<StringQueryOperatorInput>;
    presentationWidth?: InputMaybe<IntQueryOperatorInput>;
    presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};
export declare type JsonQueryOperatorInput = {
    eq?: InputMaybe<Scalars["JSON"]>;
    ne?: InputMaybe<Scalars["JSON"]>;
    in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
    nin?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
    regex?: InputMaybe<Scalars["JSON"]>;
    glob?: InputMaybe<Scalars["JSON"]>;
};
export declare type ImageSharpOriginalFilterInput = {
    width?: InputMaybe<FloatQueryOperatorInput>;
    height?: InputMaybe<FloatQueryOperatorInput>;
    src?: InputMaybe<StringQueryOperatorInput>;
};
export declare type ImageSharpResizeFilterInput = {
    src?: InputMaybe<StringQueryOperatorInput>;
    tracedSVG?: InputMaybe<StringQueryOperatorInput>;
    width?: InputMaybe<IntQueryOperatorInput>;
    height?: InputMaybe<IntQueryOperatorInput>;
    aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
    originalName?: InputMaybe<StringQueryOperatorInput>;
};
export declare type NodeFilterInput = {
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type NodeFilterListInput = {
    elemMatch?: InputMaybe<NodeFilterInput>;
};
export declare type InternalFilterInput = {
    content?: InputMaybe<StringQueryOperatorInput>;
    contentDigest?: InputMaybe<StringQueryOperatorInput>;
    description?: InputMaybe<StringQueryOperatorInput>;
    fieldOwners?: InputMaybe<StringQueryOperatorInput>;
    ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
    mediaType?: InputMaybe<StringQueryOperatorInput>;
    owner?: InputMaybe<StringQueryOperatorInput>;
    type?: InputMaybe<StringQueryOperatorInput>;
};
export declare type BooleanQueryOperatorInput = {
    eq?: InputMaybe<Scalars["Boolean"]>;
    ne?: InputMaybe<Scalars["Boolean"]>;
    in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
    nin?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
};
export declare type LocaleFilterListInput = {
    elemMatch?: InputMaybe<LocaleFilterInput>;
};
export declare type LocaleFilterInput = {
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
    language?: InputMaybe<StringQueryOperatorInput>;
    ns?: InputMaybe<StringQueryOperatorInput>;
    data?: InputMaybe<StringQueryOperatorInput>;
    fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
};
export declare type FileConnection = {
    totalCount: Scalars["Int"];
    edges: Array<FileEdge>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<FileGroupConnection>;
};
export declare type FileConnectionDistinctArgs = {
    field: FileFieldsEnum;
};
export declare type FileConnectionMaxArgs = {
    field: FileFieldsEnum;
};
export declare type FileConnectionMinArgs = {
    field: FileFieldsEnum;
};
export declare type FileConnectionSumArgs = {
    field: FileFieldsEnum;
};
export declare type FileConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: FileFieldsEnum;
};
export declare type FileEdge = {
    next?: Maybe<File>;
    node: File;
    previous?: Maybe<File>;
};
export declare type PageInfo = {
    currentPage: Scalars["Int"];
    hasPreviousPage: Scalars["Boolean"];
    hasNextPage: Scalars["Boolean"];
    itemCount: Scalars["Int"];
    pageCount: Scalars["Int"];
    perPage?: Maybe<Scalars["Int"]>;
    totalCount: Scalars["Int"];
};
export declare type FileFieldsEnum = "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atimeMs" | "mtimeMs" | "ctimeMs" | "atime" | "mtime" | "ctime" | "birthtime" | "birthtimeMs" | "blksize" | "blocks" | "publicURL" | "childrenImageSharp" | "childrenImageSharp___fixed___base64" | "childrenImageSharp___fixed___tracedSVG" | "childrenImageSharp___fixed___aspectRatio" | "childrenImageSharp___fixed___width" | "childrenImageSharp___fixed___height" | "childrenImageSharp___fixed___src" | "childrenImageSharp___fixed___srcSet" | "childrenImageSharp___fixed___srcWebp" | "childrenImageSharp___fixed___srcSetWebp" | "childrenImageSharp___fixed___originalName" | "childrenImageSharp___fluid___base64" | "childrenImageSharp___fluid___tracedSVG" | "childrenImageSharp___fluid___aspectRatio" | "childrenImageSharp___fluid___src" | "childrenImageSharp___fluid___srcSet" | "childrenImageSharp___fluid___srcWebp" | "childrenImageSharp___fluid___srcSetWebp" | "childrenImageSharp___fluid___sizes" | "childrenImageSharp___fluid___originalImg" | "childrenImageSharp___fluid___originalName" | "childrenImageSharp___fluid___presentationWidth" | "childrenImageSharp___fluid___presentationHeight" | "childrenImageSharp___gatsbyImageData" | "childrenImageSharp___original___width" | "childrenImageSharp___original___height" | "childrenImageSharp___original___src" | "childrenImageSharp___resize___src" | "childrenImageSharp___resize___tracedSVG" | "childrenImageSharp___resize___width" | "childrenImageSharp___resize___height" | "childrenImageSharp___resize___aspectRatio" | "childrenImageSharp___resize___originalName" | "childrenImageSharp___id" | "childrenImageSharp___parent___id" | "childrenImageSharp___parent___parent___id" | "childrenImageSharp___parent___parent___children" | "childrenImageSharp___parent___children" | "childrenImageSharp___parent___children___id" | "childrenImageSharp___parent___children___children" | "childrenImageSharp___parent___internal___content" | "childrenImageSharp___parent___internal___contentDigest" | "childrenImageSharp___parent___internal___description" | "childrenImageSharp___parent___internal___fieldOwners" | "childrenImageSharp___parent___internal___ignoreType" | "childrenImageSharp___parent___internal___mediaType" | "childrenImageSharp___parent___internal___owner" | "childrenImageSharp___parent___internal___type" | "childrenImageSharp___children" | "childrenImageSharp___children___id" | "childrenImageSharp___children___parent___id" | "childrenImageSharp___children___parent___children" | "childrenImageSharp___children___children" | "childrenImageSharp___children___children___id" | "childrenImageSharp___children___children___children" | "childrenImageSharp___children___internal___content" | "childrenImageSharp___children___internal___contentDigest" | "childrenImageSharp___children___internal___description" | "childrenImageSharp___children___internal___fieldOwners" | "childrenImageSharp___children___internal___ignoreType" | "childrenImageSharp___children___internal___mediaType" | "childrenImageSharp___children___internal___owner" | "childrenImageSharp___children___internal___type" | "childrenImageSharp___internal___content" | "childrenImageSharp___internal___contentDigest" | "childrenImageSharp___internal___description" | "childrenImageSharp___internal___fieldOwners" | "childrenImageSharp___internal___ignoreType" | "childrenImageSharp___internal___mediaType" | "childrenImageSharp___internal___owner" | "childrenImageSharp___internal___type" | "childImageSharp___fixed___base64" | "childImageSharp___fixed___tracedSVG" | "childImageSharp___fixed___aspectRatio" | "childImageSharp___fixed___width" | "childImageSharp___fixed___height" | "childImageSharp___fixed___src" | "childImageSharp___fixed___srcSet" | "childImageSharp___fixed___srcWebp" | "childImageSharp___fixed___srcSetWebp" | "childImageSharp___fixed___originalName" | "childImageSharp___fluid___base64" | "childImageSharp___fluid___tracedSVG" | "childImageSharp___fluid___aspectRatio" | "childImageSharp___fluid___src" | "childImageSharp___fluid___srcSet" | "childImageSharp___fluid___srcWebp" | "childImageSharp___fluid___srcSetWebp" | "childImageSharp___fluid___sizes" | "childImageSharp___fluid___originalImg" | "childImageSharp___fluid___originalName" | "childImageSharp___fluid___presentationWidth" | "childImageSharp___fluid___presentationHeight" | "childImageSharp___gatsbyImageData" | "childImageSharp___original___width" | "childImageSharp___original___height" | "childImageSharp___original___src" | "childImageSharp___resize___src" | "childImageSharp___resize___tracedSVG" | "childImageSharp___resize___width" | "childImageSharp___resize___height" | "childImageSharp___resize___aspectRatio" | "childImageSharp___resize___originalName" | "childImageSharp___id" | "childImageSharp___parent___id" | "childImageSharp___parent___parent___id" | "childImageSharp___parent___parent___children" | "childImageSharp___parent___children" | "childImageSharp___parent___children___id" | "childImageSharp___parent___children___children" | "childImageSharp___parent___internal___content" | "childImageSharp___parent___internal___contentDigest" | "childImageSharp___parent___internal___description" | "childImageSharp___parent___internal___fieldOwners" | "childImageSharp___parent___internal___ignoreType" | "childImageSharp___parent___internal___mediaType" | "childImageSharp___parent___internal___owner" | "childImageSharp___parent___internal___type" | "childImageSharp___children" | "childImageSharp___children___id" | "childImageSharp___children___parent___id" | "childImageSharp___children___parent___children" | "childImageSharp___children___children" | "childImageSharp___children___children___id" | "childImageSharp___children___children___children" | "childImageSharp___children___internal___content" | "childImageSharp___children___internal___contentDigest" | "childImageSharp___children___internal___description" | "childImageSharp___children___internal___fieldOwners" | "childImageSharp___children___internal___ignoreType" | "childImageSharp___children___internal___mediaType" | "childImageSharp___children___internal___owner" | "childImageSharp___children___internal___type" | "childImageSharp___internal___content" | "childImageSharp___internal___contentDigest" | "childImageSharp___internal___description" | "childImageSharp___internal___fieldOwners" | "childImageSharp___internal___ignoreType" | "childImageSharp___internal___mediaType" | "childImageSharp___internal___owner" | "childImageSharp___internal___type" | "childrenLocale" | "childrenLocale___id" | "childrenLocale___parent___id" | "childrenLocale___parent___parent___id" | "childrenLocale___parent___parent___children" | "childrenLocale___parent___children" | "childrenLocale___parent___children___id" | "childrenLocale___parent___children___children" | "childrenLocale___parent___internal___content" | "childrenLocale___parent___internal___contentDigest" | "childrenLocale___parent___internal___description" | "childrenLocale___parent___internal___fieldOwners" | "childrenLocale___parent___internal___ignoreType" | "childrenLocale___parent___internal___mediaType" | "childrenLocale___parent___internal___owner" | "childrenLocale___parent___internal___type" | "childrenLocale___children" | "childrenLocale___children___id" | "childrenLocale___children___parent___id" | "childrenLocale___children___parent___children" | "childrenLocale___children___children" | "childrenLocale___children___children___id" | "childrenLocale___children___children___children" | "childrenLocale___children___internal___content" | "childrenLocale___children___internal___contentDigest" | "childrenLocale___children___internal___description" | "childrenLocale___children___internal___fieldOwners" | "childrenLocale___children___internal___ignoreType" | "childrenLocale___children___internal___mediaType" | "childrenLocale___children___internal___owner" | "childrenLocale___children___internal___type" | "childrenLocale___internal___content" | "childrenLocale___internal___contentDigest" | "childrenLocale___internal___description" | "childrenLocale___internal___fieldOwners" | "childrenLocale___internal___ignoreType" | "childrenLocale___internal___mediaType" | "childrenLocale___internal___owner" | "childrenLocale___internal___type" | "childrenLocale___language" | "childrenLocale___ns" | "childrenLocale___data" | "childrenLocale___fileAbsolutePath" | "childLocale___id" | "childLocale___parent___id" | "childLocale___parent___parent___id" | "childLocale___parent___parent___children" | "childLocale___parent___children" | "childLocale___parent___children___id" | "childLocale___parent___children___children" | "childLocale___parent___internal___content" | "childLocale___parent___internal___contentDigest" | "childLocale___parent___internal___description" | "childLocale___parent___internal___fieldOwners" | "childLocale___parent___internal___ignoreType" | "childLocale___parent___internal___mediaType" | "childLocale___parent___internal___owner" | "childLocale___parent___internal___type" | "childLocale___children" | "childLocale___children___id" | "childLocale___children___parent___id" | "childLocale___children___parent___children" | "childLocale___children___children" | "childLocale___children___children___id" | "childLocale___children___children___children" | "childLocale___children___internal___content" | "childLocale___children___internal___contentDigest" | "childLocale___children___internal___description" | "childLocale___children___internal___fieldOwners" | "childLocale___children___internal___ignoreType" | "childLocale___children___internal___mediaType" | "childLocale___children___internal___owner" | "childLocale___children___internal___type" | "childLocale___internal___content" | "childLocale___internal___contentDigest" | "childLocale___internal___description" | "childLocale___internal___fieldOwners" | "childLocale___internal___ignoreType" | "childLocale___internal___mediaType" | "childLocale___internal___owner" | "childLocale___internal___type" | "childLocale___language" | "childLocale___ns" | "childLocale___data" | "childLocale___fileAbsolutePath" | "id" | "parent___id" | "parent___parent___id" | "parent___parent___parent___id" | "parent___parent___parent___children" | "parent___parent___children" | "parent___parent___children___id" | "parent___parent___children___children" | "parent___parent___internal___content" | "parent___parent___internal___contentDigest" | "parent___parent___internal___description" | "parent___parent___internal___fieldOwners" | "parent___parent___internal___ignoreType" | "parent___parent___internal___mediaType" | "parent___parent___internal___owner" | "parent___parent___internal___type" | "parent___children" | "parent___children___id" | "parent___children___parent___id" | "parent___children___parent___children" | "parent___children___children" | "parent___children___children___id" | "parent___children___children___children" | "parent___children___internal___content" | "parent___children___internal___contentDigest" | "parent___children___internal___description" | "parent___children___internal___fieldOwners" | "parent___children___internal___ignoreType" | "parent___children___internal___mediaType" | "parent___children___internal___owner" | "parent___children___internal___type" | "parent___internal___content" | "parent___internal___contentDigest" | "parent___internal___description" | "parent___internal___fieldOwners" | "parent___internal___ignoreType" | "parent___internal___mediaType" | "parent___internal___owner" | "parent___internal___type" | "children" | "children___id" | "children___parent___id" | "children___parent___parent___id" | "children___parent___parent___children" | "children___parent___children" | "children___parent___children___id" | "children___parent___children___children" | "children___parent___internal___content" | "children___parent___internal___contentDigest" | "children___parent___internal___description" | "children___parent___internal___fieldOwners" | "children___parent___internal___ignoreType" | "children___parent___internal___mediaType" | "children___parent___internal___owner" | "children___parent___internal___type" | "children___children" | "children___children___id" | "children___children___parent___id" | "children___children___parent___children" | "children___children___children" | "children___children___children___id" | "children___children___children___children" | "children___children___internal___content" | "children___children___internal___contentDigest" | "children___children___internal___description" | "children___children___internal___fieldOwners" | "children___children___internal___ignoreType" | "children___children___internal___mediaType" | "children___children___internal___owner" | "children___children___internal___type" | "children___internal___content" | "children___internal___contentDigest" | "children___internal___description" | "children___internal___fieldOwners" | "children___internal___ignoreType" | "children___internal___mediaType" | "children___internal___owner" | "children___internal___type" | "internal___content" | "internal___contentDigest" | "internal___description" | "internal___fieldOwners" | "internal___ignoreType" | "internal___mediaType" | "internal___owner" | "internal___type";
export declare type FileGroupConnection = {
    totalCount: Scalars["Int"];
    edges: Array<FileEdge>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<FileGroupConnection>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
};
export declare type FileGroupConnectionDistinctArgs = {
    field: FileFieldsEnum;
};
export declare type FileGroupConnectionMaxArgs = {
    field: FileFieldsEnum;
};
export declare type FileGroupConnectionMinArgs = {
    field: FileFieldsEnum;
};
export declare type FileGroupConnectionSumArgs = {
    field: FileFieldsEnum;
};
export declare type FileGroupConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: FileFieldsEnum;
};
export declare type FileFilterInput = {
    sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
    absolutePath?: InputMaybe<StringQueryOperatorInput>;
    relativePath?: InputMaybe<StringQueryOperatorInput>;
    extension?: InputMaybe<StringQueryOperatorInput>;
    size?: InputMaybe<IntQueryOperatorInput>;
    prettySize?: InputMaybe<StringQueryOperatorInput>;
    modifiedTime?: InputMaybe<DateQueryOperatorInput>;
    accessTime?: InputMaybe<DateQueryOperatorInput>;
    changeTime?: InputMaybe<DateQueryOperatorInput>;
    birthTime?: InputMaybe<DateQueryOperatorInput>;
    root?: InputMaybe<StringQueryOperatorInput>;
    dir?: InputMaybe<StringQueryOperatorInput>;
    base?: InputMaybe<StringQueryOperatorInput>;
    ext?: InputMaybe<StringQueryOperatorInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
    relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
    dev?: InputMaybe<IntQueryOperatorInput>;
    mode?: InputMaybe<IntQueryOperatorInput>;
    nlink?: InputMaybe<IntQueryOperatorInput>;
    uid?: InputMaybe<IntQueryOperatorInput>;
    gid?: InputMaybe<IntQueryOperatorInput>;
    rdev?: InputMaybe<IntQueryOperatorInput>;
    ino?: InputMaybe<FloatQueryOperatorInput>;
    atimeMs?: InputMaybe<FloatQueryOperatorInput>;
    mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
    ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
    atime?: InputMaybe<DateQueryOperatorInput>;
    mtime?: InputMaybe<DateQueryOperatorInput>;
    ctime?: InputMaybe<DateQueryOperatorInput>;
    birthtime?: InputMaybe<DateQueryOperatorInput>;
    birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
    blksize?: InputMaybe<IntQueryOperatorInput>;
    blocks?: InputMaybe<IntQueryOperatorInput>;
    publicURL?: InputMaybe<StringQueryOperatorInput>;
    childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
    childImageSharp?: InputMaybe<ImageSharpFilterInput>;
    childrenLocale?: InputMaybe<LocaleFilterListInput>;
    childLocale?: InputMaybe<LocaleFilterInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type FileSortInput = {
    fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};
export declare type SortOrderEnum = "ASC" | "DESC";
export declare type DirectoryConnection = {
    totalCount: Scalars["Int"];
    edges: Array<DirectoryEdge>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<DirectoryGroupConnection>;
};
export declare type DirectoryConnectionDistinctArgs = {
    field: DirectoryFieldsEnum;
};
export declare type DirectoryConnectionMaxArgs = {
    field: DirectoryFieldsEnum;
};
export declare type DirectoryConnectionMinArgs = {
    field: DirectoryFieldsEnum;
};
export declare type DirectoryConnectionSumArgs = {
    field: DirectoryFieldsEnum;
};
export declare type DirectoryConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: DirectoryFieldsEnum;
};
export declare type DirectoryEdge = {
    next?: Maybe<Directory>;
    node: Directory;
    previous?: Maybe<Directory>;
};
export declare type DirectoryFieldsEnum = "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atimeMs" | "mtimeMs" | "ctimeMs" | "atime" | "mtime" | "ctime" | "birthtime" | "birthtimeMs" | "id" | "parent___id" | "parent___parent___id" | "parent___parent___parent___id" | "parent___parent___parent___children" | "parent___parent___children" | "parent___parent___children___id" | "parent___parent___children___children" | "parent___parent___internal___content" | "parent___parent___internal___contentDigest" | "parent___parent___internal___description" | "parent___parent___internal___fieldOwners" | "parent___parent___internal___ignoreType" | "parent___parent___internal___mediaType" | "parent___parent___internal___owner" | "parent___parent___internal___type" | "parent___children" | "parent___children___id" | "parent___children___parent___id" | "parent___children___parent___children" | "parent___children___children" | "parent___children___children___id" | "parent___children___children___children" | "parent___children___internal___content" | "parent___children___internal___contentDigest" | "parent___children___internal___description" | "parent___children___internal___fieldOwners" | "parent___children___internal___ignoreType" | "parent___children___internal___mediaType" | "parent___children___internal___owner" | "parent___children___internal___type" | "parent___internal___content" | "parent___internal___contentDigest" | "parent___internal___description" | "parent___internal___fieldOwners" | "parent___internal___ignoreType" | "parent___internal___mediaType" | "parent___internal___owner" | "parent___internal___type" | "children" | "children___id" | "children___parent___id" | "children___parent___parent___id" | "children___parent___parent___children" | "children___parent___children" | "children___parent___children___id" | "children___parent___children___children" | "children___parent___internal___content" | "children___parent___internal___contentDigest" | "children___parent___internal___description" | "children___parent___internal___fieldOwners" | "children___parent___internal___ignoreType" | "children___parent___internal___mediaType" | "children___parent___internal___owner" | "children___parent___internal___type" | "children___children" | "children___children___id" | "children___children___parent___id" | "children___children___parent___children" | "children___children___children" | "children___children___children___id" | "children___children___children___children" | "children___children___internal___content" | "children___children___internal___contentDigest" | "children___children___internal___description" | "children___children___internal___fieldOwners" | "children___children___internal___ignoreType" | "children___children___internal___mediaType" | "children___children___internal___owner" | "children___children___internal___type" | "children___internal___content" | "children___internal___contentDigest" | "children___internal___description" | "children___internal___fieldOwners" | "children___internal___ignoreType" | "children___internal___mediaType" | "children___internal___owner" | "children___internal___type" | "internal___content" | "internal___contentDigest" | "internal___description" | "internal___fieldOwners" | "internal___ignoreType" | "internal___mediaType" | "internal___owner" | "internal___type";
export declare type DirectoryGroupConnection = {
    totalCount: Scalars["Int"];
    edges: Array<DirectoryEdge>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<DirectoryGroupConnection>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
};
export declare type DirectoryGroupConnectionDistinctArgs = {
    field: DirectoryFieldsEnum;
};
export declare type DirectoryGroupConnectionMaxArgs = {
    field: DirectoryFieldsEnum;
};
export declare type DirectoryGroupConnectionMinArgs = {
    field: DirectoryFieldsEnum;
};
export declare type DirectoryGroupConnectionSumArgs = {
    field: DirectoryFieldsEnum;
};
export declare type DirectoryGroupConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: DirectoryFieldsEnum;
};
export declare type DirectoryFilterInput = {
    sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
    absolutePath?: InputMaybe<StringQueryOperatorInput>;
    relativePath?: InputMaybe<StringQueryOperatorInput>;
    extension?: InputMaybe<StringQueryOperatorInput>;
    size?: InputMaybe<IntQueryOperatorInput>;
    prettySize?: InputMaybe<StringQueryOperatorInput>;
    modifiedTime?: InputMaybe<DateQueryOperatorInput>;
    accessTime?: InputMaybe<DateQueryOperatorInput>;
    changeTime?: InputMaybe<DateQueryOperatorInput>;
    birthTime?: InputMaybe<DateQueryOperatorInput>;
    root?: InputMaybe<StringQueryOperatorInput>;
    dir?: InputMaybe<StringQueryOperatorInput>;
    base?: InputMaybe<StringQueryOperatorInput>;
    ext?: InputMaybe<StringQueryOperatorInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
    relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
    dev?: InputMaybe<IntQueryOperatorInput>;
    mode?: InputMaybe<IntQueryOperatorInput>;
    nlink?: InputMaybe<IntQueryOperatorInput>;
    uid?: InputMaybe<IntQueryOperatorInput>;
    gid?: InputMaybe<IntQueryOperatorInput>;
    rdev?: InputMaybe<IntQueryOperatorInput>;
    ino?: InputMaybe<FloatQueryOperatorInput>;
    atimeMs?: InputMaybe<FloatQueryOperatorInput>;
    mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
    ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
    atime?: InputMaybe<DateQueryOperatorInput>;
    mtime?: InputMaybe<DateQueryOperatorInput>;
    ctime?: InputMaybe<DateQueryOperatorInput>;
    birthtime?: InputMaybe<DateQueryOperatorInput>;
    birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type DirectorySortInput = {
    fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};
export declare type SiteSiteMetadataFilterInput = {
    title?: InputMaybe<StringQueryOperatorInput>;
    description?: InputMaybe<StringQueryOperatorInput>;
    siteUrl?: InputMaybe<StringQueryOperatorInput>;
};
export declare type SiteConnection = {
    totalCount: Scalars["Int"];
    edges: Array<SiteEdge>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<SiteGroupConnection>;
};
export declare type SiteConnectionDistinctArgs = {
    field: SiteFieldsEnum;
};
export declare type SiteConnectionMaxArgs = {
    field: SiteFieldsEnum;
};
export declare type SiteConnectionMinArgs = {
    field: SiteFieldsEnum;
};
export declare type SiteConnectionSumArgs = {
    field: SiteFieldsEnum;
};
export declare type SiteConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: SiteFieldsEnum;
};
export declare type SiteEdge = {
    next?: Maybe<Site>;
    node: Site;
    previous?: Maybe<Site>;
};
export declare type SiteFieldsEnum = "buildTime" | "siteMetadata___title" | "siteMetadata___description" | "siteMetadata___siteUrl" | "port" | "host" | "polyfill" | "pathPrefix" | "jsxRuntime" | "trailingSlash" | "id" | "parent___id" | "parent___parent___id" | "parent___parent___parent___id" | "parent___parent___parent___children" | "parent___parent___children" | "parent___parent___children___id" | "parent___parent___children___children" | "parent___parent___internal___content" | "parent___parent___internal___contentDigest" | "parent___parent___internal___description" | "parent___parent___internal___fieldOwners" | "parent___parent___internal___ignoreType" | "parent___parent___internal___mediaType" | "parent___parent___internal___owner" | "parent___parent___internal___type" | "parent___children" | "parent___children___id" | "parent___children___parent___id" | "parent___children___parent___children" | "parent___children___children" | "parent___children___children___id" | "parent___children___children___children" | "parent___children___internal___content" | "parent___children___internal___contentDigest" | "parent___children___internal___description" | "parent___children___internal___fieldOwners" | "parent___children___internal___ignoreType" | "parent___children___internal___mediaType" | "parent___children___internal___owner" | "parent___children___internal___type" | "parent___internal___content" | "parent___internal___contentDigest" | "parent___internal___description" | "parent___internal___fieldOwners" | "parent___internal___ignoreType" | "parent___internal___mediaType" | "parent___internal___owner" | "parent___internal___type" | "children" | "children___id" | "children___parent___id" | "children___parent___parent___id" | "children___parent___parent___children" | "children___parent___children" | "children___parent___children___id" | "children___parent___children___children" | "children___parent___internal___content" | "children___parent___internal___contentDigest" | "children___parent___internal___description" | "children___parent___internal___fieldOwners" | "children___parent___internal___ignoreType" | "children___parent___internal___mediaType" | "children___parent___internal___owner" | "children___parent___internal___type" | "children___children" | "children___children___id" | "children___children___parent___id" | "children___children___parent___children" | "children___children___children" | "children___children___children___id" | "children___children___children___children" | "children___children___internal___content" | "children___children___internal___contentDigest" | "children___children___internal___description" | "children___children___internal___fieldOwners" | "children___children___internal___ignoreType" | "children___children___internal___mediaType" | "children___children___internal___owner" | "children___children___internal___type" | "children___internal___content" | "children___internal___contentDigest" | "children___internal___description" | "children___internal___fieldOwners" | "children___internal___ignoreType" | "children___internal___mediaType" | "children___internal___owner" | "children___internal___type" | "internal___content" | "internal___contentDigest" | "internal___description" | "internal___fieldOwners" | "internal___ignoreType" | "internal___mediaType" | "internal___owner" | "internal___type";
export declare type SiteGroupConnection = {
    totalCount: Scalars["Int"];
    edges: Array<SiteEdge>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<SiteGroupConnection>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
};
export declare type SiteGroupConnectionDistinctArgs = {
    field: SiteFieldsEnum;
};
export declare type SiteGroupConnectionMaxArgs = {
    field: SiteFieldsEnum;
};
export declare type SiteGroupConnectionMinArgs = {
    field: SiteFieldsEnum;
};
export declare type SiteGroupConnectionSumArgs = {
    field: SiteFieldsEnum;
};
export declare type SiteGroupConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: SiteFieldsEnum;
};
export declare type SiteFilterInput = {
    buildTime?: InputMaybe<DateQueryOperatorInput>;
    siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
    port?: InputMaybe<IntQueryOperatorInput>;
    host?: InputMaybe<StringQueryOperatorInput>;
    polyfill?: InputMaybe<BooleanQueryOperatorInput>;
    pathPrefix?: InputMaybe<StringQueryOperatorInput>;
    jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
    trailingSlash?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type SiteSortInput = {
    fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};
export declare type SiteFunctionConnection = {
    totalCount: Scalars["Int"];
    edges: Array<SiteFunctionEdge>;
    nodes: Array<SiteFunction>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<SiteFunctionGroupConnection>;
};
export declare type SiteFunctionConnectionDistinctArgs = {
    field: SiteFunctionFieldsEnum;
};
export declare type SiteFunctionConnectionMaxArgs = {
    field: SiteFunctionFieldsEnum;
};
export declare type SiteFunctionConnectionMinArgs = {
    field: SiteFunctionFieldsEnum;
};
export declare type SiteFunctionConnectionSumArgs = {
    field: SiteFunctionFieldsEnum;
};
export declare type SiteFunctionConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: SiteFunctionFieldsEnum;
};
export declare type SiteFunctionEdge = {
    next?: Maybe<SiteFunction>;
    node: SiteFunction;
    previous?: Maybe<SiteFunction>;
};
export declare type SiteFunctionFieldsEnum = "functionRoute" | "pluginName" | "originalAbsoluteFilePath" | "originalRelativeFilePath" | "relativeCompiledFilePath" | "absoluteCompiledFilePath" | "matchPath" | "id" | "parent___id" | "parent___parent___id" | "parent___parent___parent___id" | "parent___parent___parent___children" | "parent___parent___children" | "parent___parent___children___id" | "parent___parent___children___children" | "parent___parent___internal___content" | "parent___parent___internal___contentDigest" | "parent___parent___internal___description" | "parent___parent___internal___fieldOwners" | "parent___parent___internal___ignoreType" | "parent___parent___internal___mediaType" | "parent___parent___internal___owner" | "parent___parent___internal___type" | "parent___children" | "parent___children___id" | "parent___children___parent___id" | "parent___children___parent___children" | "parent___children___children" | "parent___children___children___id" | "parent___children___children___children" | "parent___children___internal___content" | "parent___children___internal___contentDigest" | "parent___children___internal___description" | "parent___children___internal___fieldOwners" | "parent___children___internal___ignoreType" | "parent___children___internal___mediaType" | "parent___children___internal___owner" | "parent___children___internal___type" | "parent___internal___content" | "parent___internal___contentDigest" | "parent___internal___description" | "parent___internal___fieldOwners" | "parent___internal___ignoreType" | "parent___internal___mediaType" | "parent___internal___owner" | "parent___internal___type" | "children" | "children___id" | "children___parent___id" | "children___parent___parent___id" | "children___parent___parent___children" | "children___parent___children" | "children___parent___children___id" | "children___parent___children___children" | "children___parent___internal___content" | "children___parent___internal___contentDigest" | "children___parent___internal___description" | "children___parent___internal___fieldOwners" | "children___parent___internal___ignoreType" | "children___parent___internal___mediaType" | "children___parent___internal___owner" | "children___parent___internal___type" | "children___children" | "children___children___id" | "children___children___parent___id" | "children___children___parent___children" | "children___children___children" | "children___children___children___id" | "children___children___children___children" | "children___children___internal___content" | "children___children___internal___contentDigest" | "children___children___internal___description" | "children___children___internal___fieldOwners" | "children___children___internal___ignoreType" | "children___children___internal___mediaType" | "children___children___internal___owner" | "children___children___internal___type" | "children___internal___content" | "children___internal___contentDigest" | "children___internal___description" | "children___internal___fieldOwners" | "children___internal___ignoreType" | "children___internal___mediaType" | "children___internal___owner" | "children___internal___type" | "internal___content" | "internal___contentDigest" | "internal___description" | "internal___fieldOwners" | "internal___ignoreType" | "internal___mediaType" | "internal___owner" | "internal___type";
export declare type SiteFunctionGroupConnection = {
    totalCount: Scalars["Int"];
    edges: Array<SiteFunctionEdge>;
    nodes: Array<SiteFunction>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<SiteFunctionGroupConnection>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
};
export declare type SiteFunctionGroupConnectionDistinctArgs = {
    field: SiteFunctionFieldsEnum;
};
export declare type SiteFunctionGroupConnectionMaxArgs = {
    field: SiteFunctionFieldsEnum;
};
export declare type SiteFunctionGroupConnectionMinArgs = {
    field: SiteFunctionFieldsEnum;
};
export declare type SiteFunctionGroupConnectionSumArgs = {
    field: SiteFunctionFieldsEnum;
};
export declare type SiteFunctionGroupConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: SiteFunctionFieldsEnum;
};
export declare type SiteFunctionFilterInput = {
    functionRoute?: InputMaybe<StringQueryOperatorInput>;
    pluginName?: InputMaybe<StringQueryOperatorInput>;
    originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
    originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
    relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
    absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
    matchPath?: InputMaybe<StringQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type SiteFunctionSortInput = {
    fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};
export declare type SitePluginFilterInput = {
    resolve?: InputMaybe<StringQueryOperatorInput>;
    name?: InputMaybe<StringQueryOperatorInput>;
    version?: InputMaybe<StringQueryOperatorInput>;
    nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
    browserAPIs?: InputMaybe<StringQueryOperatorInput>;
    ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
    pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
    pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
    packageJson?: InputMaybe<JsonQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type SitePageConnection = {
    totalCount: Scalars["Int"];
    edges: Array<SitePageEdge>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<SitePageGroupConnection>;
};
export declare type SitePageConnectionDistinctArgs = {
    field: SitePageFieldsEnum;
};
export declare type SitePageConnectionMaxArgs = {
    field: SitePageFieldsEnum;
};
export declare type SitePageConnectionMinArgs = {
    field: SitePageFieldsEnum;
};
export declare type SitePageConnectionSumArgs = {
    field: SitePageFieldsEnum;
};
export declare type SitePageConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: SitePageFieldsEnum;
};
export declare type SitePageEdge = {
    next?: Maybe<SitePage>;
    node: SitePage;
    previous?: Maybe<SitePage>;
};
export declare type SitePageFieldsEnum = "path" | "component" | "internalComponentName" | "componentChunkName" | "matchPath" | "pageContext" | "pluginCreator___resolve" | "pluginCreator___name" | "pluginCreator___version" | "pluginCreator___nodeAPIs" | "pluginCreator___browserAPIs" | "pluginCreator___ssrAPIs" | "pluginCreator___pluginFilepath" | "pluginCreator___pluginOptions" | "pluginCreator___packageJson" | "pluginCreator___id" | "pluginCreator___parent___id" | "pluginCreator___parent___parent___id" | "pluginCreator___parent___parent___children" | "pluginCreator___parent___children" | "pluginCreator___parent___children___id" | "pluginCreator___parent___children___children" | "pluginCreator___parent___internal___content" | "pluginCreator___parent___internal___contentDigest" | "pluginCreator___parent___internal___description" | "pluginCreator___parent___internal___fieldOwners" | "pluginCreator___parent___internal___ignoreType" | "pluginCreator___parent___internal___mediaType" | "pluginCreator___parent___internal___owner" | "pluginCreator___parent___internal___type" | "pluginCreator___children" | "pluginCreator___children___id" | "pluginCreator___children___parent___id" | "pluginCreator___children___parent___children" | "pluginCreator___children___children" | "pluginCreator___children___children___id" | "pluginCreator___children___children___children" | "pluginCreator___children___internal___content" | "pluginCreator___children___internal___contentDigest" | "pluginCreator___children___internal___description" | "pluginCreator___children___internal___fieldOwners" | "pluginCreator___children___internal___ignoreType" | "pluginCreator___children___internal___mediaType" | "pluginCreator___children___internal___owner" | "pluginCreator___children___internal___type" | "pluginCreator___internal___content" | "pluginCreator___internal___contentDigest" | "pluginCreator___internal___description" | "pluginCreator___internal___fieldOwners" | "pluginCreator___internal___ignoreType" | "pluginCreator___internal___mediaType" | "pluginCreator___internal___owner" | "pluginCreator___internal___type" | "id" | "parent___id" | "parent___parent___id" | "parent___parent___parent___id" | "parent___parent___parent___children" | "parent___parent___children" | "parent___parent___children___id" | "parent___parent___children___children" | "parent___parent___internal___content" | "parent___parent___internal___contentDigest" | "parent___parent___internal___description" | "parent___parent___internal___fieldOwners" | "parent___parent___internal___ignoreType" | "parent___parent___internal___mediaType" | "parent___parent___internal___owner" | "parent___parent___internal___type" | "parent___children" | "parent___children___id" | "parent___children___parent___id" | "parent___children___parent___children" | "parent___children___children" | "parent___children___children___id" | "parent___children___children___children" | "parent___children___internal___content" | "parent___children___internal___contentDigest" | "parent___children___internal___description" | "parent___children___internal___fieldOwners" | "parent___children___internal___ignoreType" | "parent___children___internal___mediaType" | "parent___children___internal___owner" | "parent___children___internal___type" | "parent___internal___content" | "parent___internal___contentDigest" | "parent___internal___description" | "parent___internal___fieldOwners" | "parent___internal___ignoreType" | "parent___internal___mediaType" | "parent___internal___owner" | "parent___internal___type" | "children" | "children___id" | "children___parent___id" | "children___parent___parent___id" | "children___parent___parent___children" | "children___parent___children" | "children___parent___children___id" | "children___parent___children___children" | "children___parent___internal___content" | "children___parent___internal___contentDigest" | "children___parent___internal___description" | "children___parent___internal___fieldOwners" | "children___parent___internal___ignoreType" | "children___parent___internal___mediaType" | "children___parent___internal___owner" | "children___parent___internal___type" | "children___children" | "children___children___id" | "children___children___parent___id" | "children___children___parent___children" | "children___children___children" | "children___children___children___id" | "children___children___children___children" | "children___children___internal___content" | "children___children___internal___contentDigest" | "children___children___internal___description" | "children___children___internal___fieldOwners" | "children___children___internal___ignoreType" | "children___children___internal___mediaType" | "children___children___internal___owner" | "children___children___internal___type" | "children___internal___content" | "children___internal___contentDigest" | "children___internal___description" | "children___internal___fieldOwners" | "children___internal___ignoreType" | "children___internal___mediaType" | "children___internal___owner" | "children___internal___type" | "internal___content" | "internal___contentDigest" | "internal___description" | "internal___fieldOwners" | "internal___ignoreType" | "internal___mediaType" | "internal___owner" | "internal___type";
export declare type SitePageGroupConnection = {
    totalCount: Scalars["Int"];
    edges: Array<SitePageEdge>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<SitePageGroupConnection>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
};
export declare type SitePageGroupConnectionDistinctArgs = {
    field: SitePageFieldsEnum;
};
export declare type SitePageGroupConnectionMaxArgs = {
    field: SitePageFieldsEnum;
};
export declare type SitePageGroupConnectionMinArgs = {
    field: SitePageFieldsEnum;
};
export declare type SitePageGroupConnectionSumArgs = {
    field: SitePageFieldsEnum;
};
export declare type SitePageGroupConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: SitePageFieldsEnum;
};
export declare type SitePageFilterInput = {
    path?: InputMaybe<StringQueryOperatorInput>;
    component?: InputMaybe<StringQueryOperatorInput>;
    internalComponentName?: InputMaybe<StringQueryOperatorInput>;
    componentChunkName?: InputMaybe<StringQueryOperatorInput>;
    matchPath?: InputMaybe<StringQueryOperatorInput>;
    pageContext?: InputMaybe<JsonQueryOperatorInput>;
    pluginCreator?: InputMaybe<SitePluginFilterInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type SitePageSortInput = {
    fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};
export declare type SitePluginConnection = {
    totalCount: Scalars["Int"];
    edges: Array<SitePluginEdge>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<SitePluginGroupConnection>;
};
export declare type SitePluginConnectionDistinctArgs = {
    field: SitePluginFieldsEnum;
};
export declare type SitePluginConnectionMaxArgs = {
    field: SitePluginFieldsEnum;
};
export declare type SitePluginConnectionMinArgs = {
    field: SitePluginFieldsEnum;
};
export declare type SitePluginConnectionSumArgs = {
    field: SitePluginFieldsEnum;
};
export declare type SitePluginConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: SitePluginFieldsEnum;
};
export declare type SitePluginEdge = {
    next?: Maybe<SitePlugin>;
    node: SitePlugin;
    previous?: Maybe<SitePlugin>;
};
export declare type SitePluginFieldsEnum = "resolve" | "name" | "version" | "nodeAPIs" | "browserAPIs" | "ssrAPIs" | "pluginFilepath" | "pluginOptions" | "packageJson" | "id" | "parent___id" | "parent___parent___id" | "parent___parent___parent___id" | "parent___parent___parent___children" | "parent___parent___children" | "parent___parent___children___id" | "parent___parent___children___children" | "parent___parent___internal___content" | "parent___parent___internal___contentDigest" | "parent___parent___internal___description" | "parent___parent___internal___fieldOwners" | "parent___parent___internal___ignoreType" | "parent___parent___internal___mediaType" | "parent___parent___internal___owner" | "parent___parent___internal___type" | "parent___children" | "parent___children___id" | "parent___children___parent___id" | "parent___children___parent___children" | "parent___children___children" | "parent___children___children___id" | "parent___children___children___children" | "parent___children___internal___content" | "parent___children___internal___contentDigest" | "parent___children___internal___description" | "parent___children___internal___fieldOwners" | "parent___children___internal___ignoreType" | "parent___children___internal___mediaType" | "parent___children___internal___owner" | "parent___children___internal___type" | "parent___internal___content" | "parent___internal___contentDigest" | "parent___internal___description" | "parent___internal___fieldOwners" | "parent___internal___ignoreType" | "parent___internal___mediaType" | "parent___internal___owner" | "parent___internal___type" | "children" | "children___id" | "children___parent___id" | "children___parent___parent___id" | "children___parent___parent___children" | "children___parent___children" | "children___parent___children___id" | "children___parent___children___children" | "children___parent___internal___content" | "children___parent___internal___contentDigest" | "children___parent___internal___description" | "children___parent___internal___fieldOwners" | "children___parent___internal___ignoreType" | "children___parent___internal___mediaType" | "children___parent___internal___owner" | "children___parent___internal___type" | "children___children" | "children___children___id" | "children___children___parent___id" | "children___children___parent___children" | "children___children___children" | "children___children___children___id" | "children___children___children___children" | "children___children___internal___content" | "children___children___internal___contentDigest" | "children___children___internal___description" | "children___children___internal___fieldOwners" | "children___children___internal___ignoreType" | "children___children___internal___mediaType" | "children___children___internal___owner" | "children___children___internal___type" | "children___internal___content" | "children___internal___contentDigest" | "children___internal___description" | "children___internal___fieldOwners" | "children___internal___ignoreType" | "children___internal___mediaType" | "children___internal___owner" | "children___internal___type" | "internal___content" | "internal___contentDigest" | "internal___description" | "internal___fieldOwners" | "internal___ignoreType" | "internal___mediaType" | "internal___owner" | "internal___type";
export declare type SitePluginGroupConnection = {
    totalCount: Scalars["Int"];
    edges: Array<SitePluginEdge>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<SitePluginGroupConnection>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
};
export declare type SitePluginGroupConnectionDistinctArgs = {
    field: SitePluginFieldsEnum;
};
export declare type SitePluginGroupConnectionMaxArgs = {
    field: SitePluginFieldsEnum;
};
export declare type SitePluginGroupConnectionMinArgs = {
    field: SitePluginFieldsEnum;
};
export declare type SitePluginGroupConnectionSumArgs = {
    field: SitePluginFieldsEnum;
};
export declare type SitePluginGroupConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: SitePluginFieldsEnum;
};
export declare type SitePluginSortInput = {
    fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};
export declare type SiteBuildMetadataConnection = {
    totalCount: Scalars["Int"];
    edges: Array<SiteBuildMetadataEdge>;
    nodes: Array<SiteBuildMetadata>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<SiteBuildMetadataGroupConnection>;
};
export declare type SiteBuildMetadataConnectionDistinctArgs = {
    field: SiteBuildMetadataFieldsEnum;
};
export declare type SiteBuildMetadataConnectionMaxArgs = {
    field: SiteBuildMetadataFieldsEnum;
};
export declare type SiteBuildMetadataConnectionMinArgs = {
    field: SiteBuildMetadataFieldsEnum;
};
export declare type SiteBuildMetadataConnectionSumArgs = {
    field: SiteBuildMetadataFieldsEnum;
};
export declare type SiteBuildMetadataConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: SiteBuildMetadataFieldsEnum;
};
export declare type SiteBuildMetadataEdge = {
    next?: Maybe<SiteBuildMetadata>;
    node: SiteBuildMetadata;
    previous?: Maybe<SiteBuildMetadata>;
};
export declare type SiteBuildMetadataFieldsEnum = "buildTime" | "id" | "parent___id" | "parent___parent___id" | "parent___parent___parent___id" | "parent___parent___parent___children" | "parent___parent___children" | "parent___parent___children___id" | "parent___parent___children___children" | "parent___parent___internal___content" | "parent___parent___internal___contentDigest" | "parent___parent___internal___description" | "parent___parent___internal___fieldOwners" | "parent___parent___internal___ignoreType" | "parent___parent___internal___mediaType" | "parent___parent___internal___owner" | "parent___parent___internal___type" | "parent___children" | "parent___children___id" | "parent___children___parent___id" | "parent___children___parent___children" | "parent___children___children" | "parent___children___children___id" | "parent___children___children___children" | "parent___children___internal___content" | "parent___children___internal___contentDigest" | "parent___children___internal___description" | "parent___children___internal___fieldOwners" | "parent___children___internal___ignoreType" | "parent___children___internal___mediaType" | "parent___children___internal___owner" | "parent___children___internal___type" | "parent___internal___content" | "parent___internal___contentDigest" | "parent___internal___description" | "parent___internal___fieldOwners" | "parent___internal___ignoreType" | "parent___internal___mediaType" | "parent___internal___owner" | "parent___internal___type" | "children" | "children___id" | "children___parent___id" | "children___parent___parent___id" | "children___parent___parent___children" | "children___parent___children" | "children___parent___children___id" | "children___parent___children___children" | "children___parent___internal___content" | "children___parent___internal___contentDigest" | "children___parent___internal___description" | "children___parent___internal___fieldOwners" | "children___parent___internal___ignoreType" | "children___parent___internal___mediaType" | "children___parent___internal___owner" | "children___parent___internal___type" | "children___children" | "children___children___id" | "children___children___parent___id" | "children___children___parent___children" | "children___children___children" | "children___children___children___id" | "children___children___children___children" | "children___children___internal___content" | "children___children___internal___contentDigest" | "children___children___internal___description" | "children___children___internal___fieldOwners" | "children___children___internal___ignoreType" | "children___children___internal___mediaType" | "children___children___internal___owner" | "children___children___internal___type" | "children___internal___content" | "children___internal___contentDigest" | "children___internal___description" | "children___internal___fieldOwners" | "children___internal___ignoreType" | "children___internal___mediaType" | "children___internal___owner" | "children___internal___type" | "internal___content" | "internal___contentDigest" | "internal___description" | "internal___fieldOwners" | "internal___ignoreType" | "internal___mediaType" | "internal___owner" | "internal___type";
export declare type SiteBuildMetadataGroupConnection = {
    totalCount: Scalars["Int"];
    edges: Array<SiteBuildMetadataEdge>;
    nodes: Array<SiteBuildMetadata>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<SiteBuildMetadataGroupConnection>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
};
export declare type SiteBuildMetadataGroupConnectionDistinctArgs = {
    field: SiteBuildMetadataFieldsEnum;
};
export declare type SiteBuildMetadataGroupConnectionMaxArgs = {
    field: SiteBuildMetadataFieldsEnum;
};
export declare type SiteBuildMetadataGroupConnectionMinArgs = {
    field: SiteBuildMetadataFieldsEnum;
};
export declare type SiteBuildMetadataGroupConnectionSumArgs = {
    field: SiteBuildMetadataFieldsEnum;
};
export declare type SiteBuildMetadataGroupConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: SiteBuildMetadataFieldsEnum;
};
export declare type SiteBuildMetadataFilterInput = {
    buildTime?: InputMaybe<DateQueryOperatorInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type SiteBuildMetadataSortInput = {
    fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};
export declare type MdxFrontmatterFilterInput = {
    title?: InputMaybe<StringQueryOperatorInput>;
};
export declare type MdxHeadingMdxFilterListInput = {
    elemMatch?: InputMaybe<MdxHeadingMdxFilterInput>;
};
export declare type MdxHeadingMdxFilterInput = {
    value?: InputMaybe<StringQueryOperatorInput>;
    depth?: InputMaybe<IntQueryOperatorInput>;
};
export declare type MdxWordCountFilterInput = {
    paragraphs?: InputMaybe<IntQueryOperatorInput>;
    sentences?: InputMaybe<IntQueryOperatorInput>;
    words?: InputMaybe<IntQueryOperatorInput>;
};
export declare type MdxConnection = {
    totalCount: Scalars["Int"];
    edges: Array<MdxEdge>;
    nodes: Array<Mdx>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<MdxGroupConnection>;
};
export declare type MdxConnectionDistinctArgs = {
    field: MdxFieldsEnum;
};
export declare type MdxConnectionMaxArgs = {
    field: MdxFieldsEnum;
};
export declare type MdxConnectionMinArgs = {
    field: MdxFieldsEnum;
};
export declare type MdxConnectionSumArgs = {
    field: MdxFieldsEnum;
};
export declare type MdxConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: MdxFieldsEnum;
};
export declare type MdxEdge = {
    next?: Maybe<Mdx>;
    node: Mdx;
    previous?: Maybe<Mdx>;
};
export declare type MdxFieldsEnum = "rawBody" | "fileAbsolutePath" | "frontmatter___title" | "slug" | "body" | "excerpt" | "headings" | "headings___value" | "headings___depth" | "html" | "mdxAST" | "tableOfContents" | "timeToRead" | "wordCount___paragraphs" | "wordCount___sentences" | "wordCount___words" | "id" | "parent___id" | "parent___parent___id" | "parent___parent___parent___id" | "parent___parent___parent___children" | "parent___parent___children" | "parent___parent___children___id" | "parent___parent___children___children" | "parent___parent___internal___content" | "parent___parent___internal___contentDigest" | "parent___parent___internal___description" | "parent___parent___internal___fieldOwners" | "parent___parent___internal___ignoreType" | "parent___parent___internal___mediaType" | "parent___parent___internal___owner" | "parent___parent___internal___type" | "parent___children" | "parent___children___id" | "parent___children___parent___id" | "parent___children___parent___children" | "parent___children___children" | "parent___children___children___id" | "parent___children___children___children" | "parent___children___internal___content" | "parent___children___internal___contentDigest" | "parent___children___internal___description" | "parent___children___internal___fieldOwners" | "parent___children___internal___ignoreType" | "parent___children___internal___mediaType" | "parent___children___internal___owner" | "parent___children___internal___type" | "parent___internal___content" | "parent___internal___contentDigest" | "parent___internal___description" | "parent___internal___fieldOwners" | "parent___internal___ignoreType" | "parent___internal___mediaType" | "parent___internal___owner" | "parent___internal___type" | "children" | "children___id" | "children___parent___id" | "children___parent___parent___id" | "children___parent___parent___children" | "children___parent___children" | "children___parent___children___id" | "children___parent___children___children" | "children___parent___internal___content" | "children___parent___internal___contentDigest" | "children___parent___internal___description" | "children___parent___internal___fieldOwners" | "children___parent___internal___ignoreType" | "children___parent___internal___mediaType" | "children___parent___internal___owner" | "children___parent___internal___type" | "children___children" | "children___children___id" | "children___children___parent___id" | "children___children___parent___children" | "children___children___children" | "children___children___children___id" | "children___children___children___children" | "children___children___internal___content" | "children___children___internal___contentDigest" | "children___children___internal___description" | "children___children___internal___fieldOwners" | "children___children___internal___ignoreType" | "children___children___internal___mediaType" | "children___children___internal___owner" | "children___children___internal___type" | "children___internal___content" | "children___internal___contentDigest" | "children___internal___description" | "children___internal___fieldOwners" | "children___internal___ignoreType" | "children___internal___mediaType" | "children___internal___owner" | "children___internal___type" | "internal___content" | "internal___contentDigest" | "internal___description" | "internal___fieldOwners" | "internal___ignoreType" | "internal___mediaType" | "internal___owner" | "internal___type";
export declare type MdxGroupConnection = {
    totalCount: Scalars["Int"];
    edges: Array<MdxEdge>;
    nodes: Array<Mdx>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<MdxGroupConnection>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
};
export declare type MdxGroupConnectionDistinctArgs = {
    field: MdxFieldsEnum;
};
export declare type MdxGroupConnectionMaxArgs = {
    field: MdxFieldsEnum;
};
export declare type MdxGroupConnectionMinArgs = {
    field: MdxFieldsEnum;
};
export declare type MdxGroupConnectionSumArgs = {
    field: MdxFieldsEnum;
};
export declare type MdxGroupConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: MdxFieldsEnum;
};
export declare type MdxFilterInput = {
    rawBody?: InputMaybe<StringQueryOperatorInput>;
    fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
    frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
    slug?: InputMaybe<StringQueryOperatorInput>;
    body?: InputMaybe<StringQueryOperatorInput>;
    excerpt?: InputMaybe<StringQueryOperatorInput>;
    headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
    html?: InputMaybe<StringQueryOperatorInput>;
    mdxAST?: InputMaybe<JsonQueryOperatorInput>;
    tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
    timeToRead?: InputMaybe<IntQueryOperatorInput>;
    wordCount?: InputMaybe<MdxWordCountFilterInput>;
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
};
export declare type MdxSortInput = {
    fields?: InputMaybe<Array<InputMaybe<MdxFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};
export declare type ImageSharpConnection = {
    totalCount: Scalars["Int"];
    edges: Array<ImageSharpEdge>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<ImageSharpGroupConnection>;
};
export declare type ImageSharpConnectionDistinctArgs = {
    field: ImageSharpFieldsEnum;
};
export declare type ImageSharpConnectionMaxArgs = {
    field: ImageSharpFieldsEnum;
};
export declare type ImageSharpConnectionMinArgs = {
    field: ImageSharpFieldsEnum;
};
export declare type ImageSharpConnectionSumArgs = {
    field: ImageSharpFieldsEnum;
};
export declare type ImageSharpConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: ImageSharpFieldsEnum;
};
export declare type ImageSharpEdge = {
    next?: Maybe<ImageSharp>;
    node: ImageSharp;
    previous?: Maybe<ImageSharp>;
};
export declare type ImageSharpFieldsEnum = "fixed___base64" | "fixed___tracedSVG" | "fixed___aspectRatio" | "fixed___width" | "fixed___height" | "fixed___src" | "fixed___srcSet" | "fixed___srcWebp" | "fixed___srcSetWebp" | "fixed___originalName" | "fluid___base64" | "fluid___tracedSVG" | "fluid___aspectRatio" | "fluid___src" | "fluid___srcSet" | "fluid___srcWebp" | "fluid___srcSetWebp" | "fluid___sizes" | "fluid___originalImg" | "fluid___originalName" | "fluid___presentationWidth" | "fluid___presentationHeight" | "gatsbyImageData" | "original___width" | "original___height" | "original___src" | "resize___src" | "resize___tracedSVG" | "resize___width" | "resize___height" | "resize___aspectRatio" | "resize___originalName" | "id" | "parent___id" | "parent___parent___id" | "parent___parent___parent___id" | "parent___parent___parent___children" | "parent___parent___children" | "parent___parent___children___id" | "parent___parent___children___children" | "parent___parent___internal___content" | "parent___parent___internal___contentDigest" | "parent___parent___internal___description" | "parent___parent___internal___fieldOwners" | "parent___parent___internal___ignoreType" | "parent___parent___internal___mediaType" | "parent___parent___internal___owner" | "parent___parent___internal___type" | "parent___children" | "parent___children___id" | "parent___children___parent___id" | "parent___children___parent___children" | "parent___children___children" | "parent___children___children___id" | "parent___children___children___children" | "parent___children___internal___content" | "parent___children___internal___contentDigest" | "parent___children___internal___description" | "parent___children___internal___fieldOwners" | "parent___children___internal___ignoreType" | "parent___children___internal___mediaType" | "parent___children___internal___owner" | "parent___children___internal___type" | "parent___internal___content" | "parent___internal___contentDigest" | "parent___internal___description" | "parent___internal___fieldOwners" | "parent___internal___ignoreType" | "parent___internal___mediaType" | "parent___internal___owner" | "parent___internal___type" | "children" | "children___id" | "children___parent___id" | "children___parent___parent___id" | "children___parent___parent___children" | "children___parent___children" | "children___parent___children___id" | "children___parent___children___children" | "children___parent___internal___content" | "children___parent___internal___contentDigest" | "children___parent___internal___description" | "children___parent___internal___fieldOwners" | "children___parent___internal___ignoreType" | "children___parent___internal___mediaType" | "children___parent___internal___owner" | "children___parent___internal___type" | "children___children" | "children___children___id" | "children___children___parent___id" | "children___children___parent___children" | "children___children___children" | "children___children___children___id" | "children___children___children___children" | "children___children___internal___content" | "children___children___internal___contentDigest" | "children___children___internal___description" | "children___children___internal___fieldOwners" | "children___children___internal___ignoreType" | "children___children___internal___mediaType" | "children___children___internal___owner" | "children___children___internal___type" | "children___internal___content" | "children___internal___contentDigest" | "children___internal___description" | "children___internal___fieldOwners" | "children___internal___ignoreType" | "children___internal___mediaType" | "children___internal___owner" | "children___internal___type" | "internal___content" | "internal___contentDigest" | "internal___description" | "internal___fieldOwners" | "internal___ignoreType" | "internal___mediaType" | "internal___owner" | "internal___type";
export declare type ImageSharpGroupConnection = {
    totalCount: Scalars["Int"];
    edges: Array<ImageSharpEdge>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<ImageSharpGroupConnection>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
};
export declare type ImageSharpGroupConnectionDistinctArgs = {
    field: ImageSharpFieldsEnum;
};
export declare type ImageSharpGroupConnectionMaxArgs = {
    field: ImageSharpFieldsEnum;
};
export declare type ImageSharpGroupConnectionMinArgs = {
    field: ImageSharpFieldsEnum;
};
export declare type ImageSharpGroupConnectionSumArgs = {
    field: ImageSharpFieldsEnum;
};
export declare type ImageSharpGroupConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: ImageSharpFieldsEnum;
};
export declare type ImageSharpSortInput = {
    fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};
export declare type LocaleConnection = {
    totalCount: Scalars["Int"];
    edges: Array<LocaleEdge>;
    nodes: Array<Locale>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<LocaleGroupConnection>;
};
export declare type LocaleConnectionDistinctArgs = {
    field: LocaleFieldsEnum;
};
export declare type LocaleConnectionMaxArgs = {
    field: LocaleFieldsEnum;
};
export declare type LocaleConnectionMinArgs = {
    field: LocaleFieldsEnum;
};
export declare type LocaleConnectionSumArgs = {
    field: LocaleFieldsEnum;
};
export declare type LocaleConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: LocaleFieldsEnum;
};
export declare type LocaleEdge = {
    next?: Maybe<Locale>;
    node: Locale;
    previous?: Maybe<Locale>;
};
export declare type LocaleFieldsEnum = "id" | "parent___id" | "parent___parent___id" | "parent___parent___parent___id" | "parent___parent___parent___children" | "parent___parent___children" | "parent___parent___children___id" | "parent___parent___children___children" | "parent___parent___internal___content" | "parent___parent___internal___contentDigest" | "parent___parent___internal___description" | "parent___parent___internal___fieldOwners" | "parent___parent___internal___ignoreType" | "parent___parent___internal___mediaType" | "parent___parent___internal___owner" | "parent___parent___internal___type" | "parent___children" | "parent___children___id" | "parent___children___parent___id" | "parent___children___parent___children" | "parent___children___children" | "parent___children___children___id" | "parent___children___children___children" | "parent___children___internal___content" | "parent___children___internal___contentDigest" | "parent___children___internal___description" | "parent___children___internal___fieldOwners" | "parent___children___internal___ignoreType" | "parent___children___internal___mediaType" | "parent___children___internal___owner" | "parent___children___internal___type" | "parent___internal___content" | "parent___internal___contentDigest" | "parent___internal___description" | "parent___internal___fieldOwners" | "parent___internal___ignoreType" | "parent___internal___mediaType" | "parent___internal___owner" | "parent___internal___type" | "children" | "children___id" | "children___parent___id" | "children___parent___parent___id" | "children___parent___parent___children" | "children___parent___children" | "children___parent___children___id" | "children___parent___children___children" | "children___parent___internal___content" | "children___parent___internal___contentDigest" | "children___parent___internal___description" | "children___parent___internal___fieldOwners" | "children___parent___internal___ignoreType" | "children___parent___internal___mediaType" | "children___parent___internal___owner" | "children___parent___internal___type" | "children___children" | "children___children___id" | "children___children___parent___id" | "children___children___parent___children" | "children___children___children" | "children___children___children___id" | "children___children___children___children" | "children___children___internal___content" | "children___children___internal___contentDigest" | "children___children___internal___description" | "children___children___internal___fieldOwners" | "children___children___internal___ignoreType" | "children___children___internal___mediaType" | "children___children___internal___owner" | "children___children___internal___type" | "children___internal___content" | "children___internal___contentDigest" | "children___internal___description" | "children___internal___fieldOwners" | "children___internal___ignoreType" | "children___internal___mediaType" | "children___internal___owner" | "children___internal___type" | "internal___content" | "internal___contentDigest" | "internal___description" | "internal___fieldOwners" | "internal___ignoreType" | "internal___mediaType" | "internal___owner" | "internal___type" | "language" | "ns" | "data" | "fileAbsolutePath";
export declare type LocaleGroupConnection = {
    totalCount: Scalars["Int"];
    edges: Array<LocaleEdge>;
    nodes: Array<Locale>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<LocaleGroupConnection>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
};
export declare type LocaleGroupConnectionDistinctArgs = {
    field: LocaleFieldsEnum;
};
export declare type LocaleGroupConnectionMaxArgs = {
    field: LocaleFieldsEnum;
};
export declare type LocaleGroupConnectionMinArgs = {
    field: LocaleFieldsEnum;
};
export declare type LocaleGroupConnectionSumArgs = {
    field: LocaleFieldsEnum;
};
export declare type LocaleGroupConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: LocaleFieldsEnum;
};
export declare type LocaleSortInput = {
    fields?: InputMaybe<Array<InputMaybe<LocaleFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};
export declare type AirtableDataFilterInput = {
    Beneficiary?: InputMaybe<StringQueryOperatorInput>;
    Grant_origin?: InputMaybe<StringQueryOperatorInput>;
    Project_name?: InputMaybe<StringQueryOperatorInput>;
    Category?: InputMaybe<StringQueryOperatorInput>;
    Status?: InputMaybe<StringQueryOperatorInput>;
    Project_Lead?: InputMaybe<StringQueryOperatorInput>;
    origin_link?: InputMaybe<StringQueryOperatorInput>;
    Currency?: InputMaybe<StringQueryOperatorInput>;
    Fund?: InputMaybe<StringQueryOperatorInput>;
    Sub_beneficiary?: InputMaybe<StringQueryOperatorInput>;
    USD_equivalent?: InputMaybe<IntQueryOperatorInput>;
    Last_Modified?: InputMaybe<DateQueryOperatorInput>;
    Funds_requested?: InputMaybe<IntQueryOperatorInput>;
    Started_on?: InputMaybe<DateQueryOperatorInput>;
    Completed_on?: InputMaybe<DateQueryOperatorInput>;
    Description?: InputMaybe<StringQueryOperatorInput>;
    Status_title?: InputMaybe<StringQueryOperatorInput>;
    Status_description?: InputMaybe<StringQueryOperatorInput>;
    Status_desc_link1?: InputMaybe<StringQueryOperatorInput>;
};
export declare type AirtableConnection = {
    totalCount: Scalars["Int"];
    edges: Array<AirtableEdge>;
    nodes: Array<Airtable>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<AirtableGroupConnection>;
};
export declare type AirtableConnectionDistinctArgs = {
    field: AirtableFieldsEnum;
};
export declare type AirtableConnectionMaxArgs = {
    field: AirtableFieldsEnum;
};
export declare type AirtableConnectionMinArgs = {
    field: AirtableFieldsEnum;
};
export declare type AirtableConnectionSumArgs = {
    field: AirtableFieldsEnum;
};
export declare type AirtableConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: AirtableFieldsEnum;
};
export declare type AirtableEdge = {
    next?: Maybe<Airtable>;
    node: Airtable;
    previous?: Maybe<Airtable>;
};
export declare type AirtableFieldsEnum = "id" | "parent___id" | "parent___parent___id" | "parent___parent___parent___id" | "parent___parent___parent___children" | "parent___parent___children" | "parent___parent___children___id" | "parent___parent___children___children" | "parent___parent___internal___content" | "parent___parent___internal___contentDigest" | "parent___parent___internal___description" | "parent___parent___internal___fieldOwners" | "parent___parent___internal___ignoreType" | "parent___parent___internal___mediaType" | "parent___parent___internal___owner" | "parent___parent___internal___type" | "parent___children" | "parent___children___id" | "parent___children___parent___id" | "parent___children___parent___children" | "parent___children___children" | "parent___children___children___id" | "parent___children___children___children" | "parent___children___internal___content" | "parent___children___internal___contentDigest" | "parent___children___internal___description" | "parent___children___internal___fieldOwners" | "parent___children___internal___ignoreType" | "parent___children___internal___mediaType" | "parent___children___internal___owner" | "parent___children___internal___type" | "parent___internal___content" | "parent___internal___contentDigest" | "parent___internal___description" | "parent___internal___fieldOwners" | "parent___internal___ignoreType" | "parent___internal___mediaType" | "parent___internal___owner" | "parent___internal___type" | "children" | "children___id" | "children___parent___id" | "children___parent___parent___id" | "children___parent___parent___children" | "children___parent___children" | "children___parent___children___id" | "children___parent___children___children" | "children___parent___internal___content" | "children___parent___internal___contentDigest" | "children___parent___internal___description" | "children___parent___internal___fieldOwners" | "children___parent___internal___ignoreType" | "children___parent___internal___mediaType" | "children___parent___internal___owner" | "children___parent___internal___type" | "children___children" | "children___children___id" | "children___children___parent___id" | "children___children___parent___children" | "children___children___children" | "children___children___children___id" | "children___children___children___children" | "children___children___internal___content" | "children___children___internal___contentDigest" | "children___children___internal___description" | "children___children___internal___fieldOwners" | "children___children___internal___ignoreType" | "children___children___internal___mediaType" | "children___children___internal___owner" | "children___children___internal___type" | "children___internal___content" | "children___internal___contentDigest" | "children___internal___description" | "children___internal___fieldOwners" | "children___internal___ignoreType" | "children___internal___mediaType" | "children___internal___owner" | "children___internal___type" | "internal___content" | "internal___contentDigest" | "internal___description" | "internal___fieldOwners" | "internal___ignoreType" | "internal___mediaType" | "internal___owner" | "internal___type" | "table" | "recordId" | "rowIndex" | "data___Beneficiary" | "data___Grant_origin" | "data___Project_name" | "data___Category" | "data___Status" | "data___Project_Lead" | "data___origin_link" | "data___Currency" | "data___Fund" | "data___Sub_beneficiary" | "data___USD_equivalent" | "data___Last_Modified" | "data___Funds_requested" | "data___Started_on" | "data___Completed_on" | "data___Description" | "data___Status_title" | "data___Status_description" | "data___Status_desc_link1";
export declare type AirtableGroupConnection = {
    totalCount: Scalars["Int"];
    edges: Array<AirtableEdge>;
    nodes: Array<Airtable>;
    pageInfo: PageInfo;
    distinct: Array<Scalars["String"]>;
    max?: Maybe<Scalars["Float"]>;
    min?: Maybe<Scalars["Float"]>;
    sum?: Maybe<Scalars["Float"]>;
    group: Array<AirtableGroupConnection>;
    field: Scalars["String"];
    fieldValue?: Maybe<Scalars["String"]>;
};
export declare type AirtableGroupConnectionDistinctArgs = {
    field: AirtableFieldsEnum;
};
export declare type AirtableGroupConnectionMaxArgs = {
    field: AirtableFieldsEnum;
};
export declare type AirtableGroupConnectionMinArgs = {
    field: AirtableFieldsEnum;
};
export declare type AirtableGroupConnectionSumArgs = {
    field: AirtableFieldsEnum;
};
export declare type AirtableGroupConnectionGroupArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    field: AirtableFieldsEnum;
};
export declare type AirtableFilterInput = {
    id?: InputMaybe<StringQueryOperatorInput>;
    parent?: InputMaybe<NodeFilterInput>;
    children?: InputMaybe<NodeFilterListInput>;
    internal?: InputMaybe<InternalFilterInput>;
    table?: InputMaybe<StringQueryOperatorInput>;
    recordId?: InputMaybe<StringQueryOperatorInput>;
    rowIndex?: InputMaybe<IntQueryOperatorInput>;
    data?: InputMaybe<AirtableDataFilterInput>;
};
export declare type AirtableSortInput = {
    fields?: InputMaybe<Array<InputMaybe<AirtableFieldsEnum>>>;
    order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};
export declare type MyQueryQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type MyQueryQuery = {
    allAirtable: {
        edges: Array<{
            node: {
                data?: {
                    Beneficiary?: string | null;
                    Category?: string | null;
                    Completed_on?: any | null;
                    Currency?: string | null;
                    Fund?: string | null;
                    Description?: string | null;
                    Funds_requested?: number | null;
                    Grant_origin?: string | null;
                    Last_Modified?: any | null;
                    Project_Lead?: string | null;
                    Project_name?: string | null;
                    Started_on?: any | null;
                    Status_desc_link1?: string | null;
                    Status?: string | null;
                    Status_description?: string | null;
                    Status_title?: string | null;
                    origin_link?: string | null;
                } | null;
            };
        }>;
    };
};
export declare type Unnamed_1_QueryVariables = Exact<{
    language: Scalars["String"];
}>;
export declare type Unnamed_1_Query = {
    locales: {
        edges: Array<{
            node: {
                ns?: string | null;
                data?: string | null;
                language?: string | null;
            };
        }>;
    };
};
export declare type Unnamed_2_QueryVariables = Exact<{
    language: Scalars["String"];
}>;
export declare type Unnamed_2_Query = {
    locales: {
        edges: Array<{
            node: {
                ns?: string | null;
                data?: string | null;
                language?: string | null;
            };
        }>;
    };
};
export declare type Unnamed_3_QueryVariables = Exact<{
    language: Scalars["String"];
}>;
export declare type Unnamed_3_Query = {
    locales: {
        edges: Array<{
            node: {
                ns?: string | null;
                data?: string | null;
                language?: string | null;
            };
        }>;
    };
};
export declare type Unnamed_4_QueryVariables = Exact<{
    language: Scalars["String"];
}>;
export declare type Unnamed_4_Query = {
    locales: {
        edges: Array<{
            node: {
                ns?: string | null;
                data?: string | null;
                language?: string | null;
            };
        }>;
    };
};
export declare type Unnamed_5_QueryVariables = Exact<{
    language: Scalars["String"];
}>;
export declare type Unnamed_5_Query = {
    locales: {
        edges: Array<{
            node: {
                ns?: string | null;
                data?: string | null;
                language?: string | null;
            };
        }>;
    };
};
export declare type Unnamed_6_QueryVariables = Exact<{
    language: Scalars["String"];
}>;
export declare type Unnamed_6_Query = {
    locales: {
        edges: Array<{
            node: {
                ns?: string | null;
                data?: string | null;
                language?: string | null;
            };
        }>;
    };
};
export declare type Unnamed_7_QueryVariables = Exact<{
    language: Scalars["String"];
}>;
export declare type Unnamed_7_Query = {
    locales: {
        edges: Array<{
            node: {
                ns?: string | null;
                data?: string | null;
                language?: string | null;
            };
        }>;
    };
};
export declare type GatsbyImageSharpFixedFragment = {
    base64?: string | null;
    width: number;
    height: number;
    src: string;
    srcSet: string;
};
export declare type GatsbyImageSharpFixed_TracedSvgFragment = {
    tracedSVG?: string | null;
    width: number;
    height: number;
    src: string;
    srcSet: string;
};
export declare type GatsbyImageSharpFixed_WithWebpFragment = {
    base64?: string | null;
    width: number;
    height: number;
    src: string;
    srcSet: string;
    srcWebp?: string | null;
    srcSetWebp?: string | null;
};
export declare type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
    tracedSVG?: string | null;
    width: number;
    height: number;
    src: string;
    srcSet: string;
    srcWebp?: string | null;
    srcSetWebp?: string | null;
};
export declare type GatsbyImageSharpFixed_NoBase64Fragment = {
    width: number;
    height: number;
    src: string;
    srcSet: string;
};
export declare type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
    width: number;
    height: number;
    src: string;
    srcSet: string;
    srcWebp?: string | null;
    srcSetWebp?: string | null;
};
export declare type GatsbyImageSharpFluidFragment = {
    base64?: string | null;
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
};
export declare type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
    maxHeight: number;
    maxWidth: number;
};
export declare type GatsbyImageSharpFluid_TracedSvgFragment = {
    tracedSVG?: string | null;
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
};
export declare type GatsbyImageSharpFluid_WithWebpFragment = {
    base64?: string | null;
    aspectRatio: number;
    src: string;
    srcSet: string;
    srcWebp?: string | null;
    srcSetWebp?: string | null;
    sizes: string;
};
export declare type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
    tracedSVG?: string | null;
    aspectRatio: number;
    src: string;
    srcSet: string;
    srcWebp?: string | null;
    srcSetWebp?: string | null;
    sizes: string;
};
export declare type GatsbyImageSharpFluid_NoBase64Fragment = {
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
};
export declare type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
    aspectRatio: number;
    src: string;
    srcSet: string;
    srcWebp?: string | null;
    srcSetWebp?: string | null;
    sizes: string;
};