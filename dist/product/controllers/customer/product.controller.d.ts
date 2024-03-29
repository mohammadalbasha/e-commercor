/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CategoryService } from 'src/category/services/category.service';
import { ProductService } from 'src/product/services/product.service';
import { Store } from 'src/store/models/store.model';
export declare class ProductCustomerController {
    private productService;
    private categoryService;
    constructor(productService: ProductService, categoryService: CategoryService);
    listAll(categoryId: string, requestQuery: any, store: Store): Promise<{
        items: (import("mongoose").Document<unknown, {}, import("../../models/product.model").Product & Document> & Omit<import("../../models/product.model").Product & Document & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
        totalPages: number;
        currentPage: number;
        totalItems: number;
    }>;
    listByStoreId(storeId: string): Promise<Omit<import("mongoose").Document<unknown, {}, import("../../models/product.model").Product & Document> & Omit<import("../../models/product.model").Product & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>[]>;
    listOne(productId: string, store: Store): Promise<{
        categoryName: string;
        cardProperties: import("mongoose").Schema.Types.Mixed;
        productProperties: import("../../../category/models/category.model").ProductProperties;
        _id: import("mongoose").Types.ObjectId;
        __v?: any;
        $locals: Record<string, unknown>;
        $op: "remove" | "validate" | "save";
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection<import("bson").Document>;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        id: any;
        isNew: boolean;
        schema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
            [x: string]: any;
        }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
            [x: string]: any;
        }>> & Omit<import("mongoose").FlatRecord<{
            [x: string]: any;
        }> & Required<{
            _id: unknown;
        }>, never>>;
        close: () => void;
        name: string;
        count: number;
        normalize: () => void;
        isActive?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        URL: string;
        alinkColor: string;
        all: HTMLAllCollection;
        anchors: HTMLCollectionOf<HTMLAnchorElement>;
        applets: HTMLCollection;
        bgColor: string;
        body: HTMLElement;
        characterSet: string;
        charset: string;
        compatMode: string;
        contentType: string;
        cookie: string;
        currentScript: HTMLOrSVGScriptElement;
        defaultView: Window & typeof globalThis;
        designMode: string;
        dir: string;
        doctype: DocumentType;
        documentElement: HTMLElement;
        documentURI: string;
        domain: string;
        embeds: HTMLCollectionOf<HTMLEmbedElement>;
        fgColor: string;
        forms: HTMLCollectionOf<HTMLFormElement>;
        fullscreen: boolean;
        fullscreenEnabled: boolean;
        head: HTMLHeadElement;
        hidden: boolean;
        images: HTMLCollectionOf<HTMLImageElement>;
        implementation: DOMImplementation;
        inputEncoding: string;
        lastModified: string;
        linkColor: string;
        links: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>;
        location: Location;
        onfullscreenchange: (this: Document, ev: Event) => any;
        onfullscreenerror: (this: Document, ev: Event) => any;
        onpointerlockchange: (this: Document, ev: Event) => any;
        onpointerlockerror: (this: Document, ev: Event) => any;
        onreadystatechange: (this: Document, ev: Event) => any;
        onvisibilitychange: (this: Document, ev: Event) => any;
        ownerDocument: null;
        pictureInPictureEnabled: boolean;
        plugins: HTMLCollectionOf<HTMLEmbedElement>;
        readyState: DocumentReadyState;
        referrer: string;
        rootElement: SVGSVGElement;
        scripts: HTMLCollectionOf<HTMLScriptElement>;
        scrollingElement: Element;
        timeline: DocumentTimeline;
        title: string;
        visibilityState: DocumentVisibilityState;
        vlinkColor: string;
        adoptNode: <T extends Node>(node: T) => T;
        captureEvents: () => void;
        caretRangeFromPoint: (x: number, y: number) => Range;
        clear: () => void;
        createAttribute: (localName: string) => Attr;
        createAttributeNS: (namespace: string, qualifiedName: string) => Attr;
        createCDATASection: (data: string) => CDATASection;
        createComment: (data: string) => Comment;
        createDocumentFragment: () => DocumentFragment;
        createElement: {
            <K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];
            <K_1 extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K_1, options?: ElementCreationOptions): HTMLElementDeprecatedTagNameMap[K_1];
            (tagName: string, options?: ElementCreationOptions): HTMLElement;
        };
        createElementNS: {
            (namespaceURI: "http://www.w3.org/1999/xhtml", qualifiedName: string): HTMLElement;
            <K_2 extends keyof SVGElementTagNameMap>(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: K_2): SVGElementTagNameMap[K_2];
            (namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: string): SVGElement;
            (namespaceURI: string, qualifiedName: string, options?: ElementCreationOptions): Element;
            (namespace: string, qualifiedName: string, options?: string | ElementCreationOptions): Element;
        };
        createEvent: {
            (eventInterface: "AnimationEvent"): AnimationEvent;
            (eventInterface: "AnimationPlaybackEvent"): AnimationPlaybackEvent;
            (eventInterface: "AudioProcessingEvent"): AudioProcessingEvent;
            (eventInterface: "BeforeUnloadEvent"): BeforeUnloadEvent;
            (eventInterface: "BlobEvent"): BlobEvent;
            (eventInterface: "ClipboardEvent"): ClipboardEvent;
            (eventInterface: "CloseEvent"): CloseEvent;
            (eventInterface: "CompositionEvent"): CompositionEvent;
            (eventInterface: "CustomEvent"): CustomEvent<any>;
            (eventInterface: "DeviceMotionEvent"): DeviceMotionEvent;
            (eventInterface: "DeviceOrientationEvent"): DeviceOrientationEvent;
            (eventInterface: "DragEvent"): DragEvent;
            (eventInterface: "ErrorEvent"): ErrorEvent;
            (eventInterface: "Event"): Event;
            (eventInterface: "Events"): Event;
            (eventInterface: "FocusEvent"): FocusEvent;
            (eventInterface: "FontFaceSetLoadEvent"): FontFaceSetLoadEvent;
            (eventInterface: "FormDataEvent"): FormDataEvent;
            (eventInterface: "GamepadEvent"): GamepadEvent;
            (eventInterface: "HashChangeEvent"): HashChangeEvent;
            (eventInterface: "IDBVersionChangeEvent"): IDBVersionChangeEvent;
            (eventInterface: "InputEvent"): InputEvent;
            (eventInterface: "KeyboardEvent"): KeyboardEvent;
            (eventInterface: "MediaEncryptedEvent"): MediaEncryptedEvent;
            (eventInterface: "MediaKeyMessageEvent"): MediaKeyMessageEvent;
            (eventInterface: "MediaQueryListEvent"): MediaQueryListEvent;
            (eventInterface: "MediaStreamTrackEvent"): MediaStreamTrackEvent;
            (eventInterface: "MessageEvent"): MessageEvent<any>;
            (eventInterface: "MouseEvent"): MouseEvent;
            (eventInterface: "MouseEvents"): MouseEvent;
            (eventInterface: "MutationEvent"): MutationEvent;
            (eventInterface: "MutationEvents"): MutationEvent;
            (eventInterface: "OfflineAudioCompletionEvent"): OfflineAudioCompletionEvent;
            (eventInterface: "PageTransitionEvent"): PageTransitionEvent;
            (eventInterface: "PaymentMethodChangeEvent"): PaymentMethodChangeEvent;
            (eventInterface: "PaymentRequestUpdateEvent"): PaymentRequestUpdateEvent;
            (eventInterface: "PictureInPictureEvent"): PictureInPictureEvent;
            (eventInterface: "PointerEvent"): PointerEvent;
            (eventInterface: "PopStateEvent"): PopStateEvent;
            (eventInterface: "ProgressEvent"): ProgressEvent<EventTarget>;
            (eventInterface: "PromiseRejectionEvent"): PromiseRejectionEvent;
            (eventInterface: "RTCDTMFToneChangeEvent"): RTCDTMFToneChangeEvent;
            (eventInterface: "RTCDataChannelEvent"): RTCDataChannelEvent;
            (eventInterface: "RTCErrorEvent"): RTCErrorEvent;
            (eventInterface: "RTCPeerConnectionIceErrorEvent"): RTCPeerConnectionIceErrorEvent;
            (eventInterface: "RTCPeerConnectionIceEvent"): RTCPeerConnectionIceEvent;
            (eventInterface: "RTCTrackEvent"): RTCTrackEvent;
            (eventInterface: "SecurityPolicyViolationEvent"): SecurityPolicyViolationEvent;
            (eventInterface: "SpeechSynthesisErrorEvent"): SpeechSynthesisErrorEvent;
            (eventInterface: "SpeechSynthesisEvent"): SpeechSynthesisEvent;
            (eventInterface: "StorageEvent"): StorageEvent;
            (eventInterface: "SubmitEvent"): SubmitEvent;
            (eventInterface: "TouchEvent"): TouchEvent;
            (eventInterface: "TrackEvent"): TrackEvent;
            (eventInterface: "TransitionEvent"): TransitionEvent;
            (eventInterface: "UIEvent"): UIEvent;
            (eventInterface: "UIEvents"): UIEvent;
            (eventInterface: "WebGLContextEvent"): WebGLContextEvent;
            (eventInterface: "WheelEvent"): WheelEvent;
            (eventInterface: string): Event;
        };
        createNodeIterator: (root: Node, whatToShow?: number, filter?: NodeFilter) => NodeIterator;
        createProcessingInstruction: (target: string, data: string) => ProcessingInstruction;
        createRange: () => Range;
        createTextNode: (data: string) => Text;
        createTreeWalker: (root: Node, whatToShow?: number, filter?: NodeFilter) => TreeWalker;
        execCommand: (commandId: string, showUI?: boolean, value?: string) => boolean;
        exitFullscreen: () => Promise<void>;
        exitPictureInPicture: () => Promise<void>;
        exitPointerLock: () => void;
        getElementById: (elementId: string) => HTMLElement;
        getElementsByClassName: (classNames: string) => HTMLCollectionOf<Element>;
        getElementsByName: (elementName: string) => NodeListOf<HTMLElement>;
        getElementsByTagName: {
            <K_3 extends keyof HTMLElementTagNameMap>(qualifiedName: K_3): HTMLCollectionOf<HTMLElementTagNameMap[K_3]>;
            <K_4 extends keyof SVGElementTagNameMap>(qualifiedName: K_4): HTMLCollectionOf<SVGElementTagNameMap[K_4]>;
            (qualifiedName: string): HTMLCollectionOf<Element>;
        };
        getElementsByTagNameNS: {
            (namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
            (namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
            (namespace: string, localName: string): HTMLCollectionOf<Element>;
        };
        getSelection: () => Selection;
        hasFocus: () => boolean;
        hasStorageAccess: () => Promise<boolean>;
        importNode: <T_1 extends Node>(node: T_1, deep?: boolean) => T_1;
        open: {
            (unused1?: string, unused2?: string): Document;
            (url: string | URL, name: string, features: string): Window;
        };
        queryCommandEnabled: (commandId: string) => boolean;
        queryCommandIndeterm: (commandId: string) => boolean;
        queryCommandState: (commandId: string) => boolean;
        queryCommandSupported: (commandId: string) => boolean;
        queryCommandValue: (commandId: string) => string;
        releaseEvents: () => void;
        requestStorageAccess: () => Promise<void>;
        write: (...text: string[]) => void;
        writeln: (...text: string[]) => void;
        addEventListener: {
            <K_5 extends keyof DocumentEventMap>(type: K_5, listener: (this: Document, ev: DocumentEventMap[K_5]) => any, options?: boolean | AddEventListenerOptions): void;
            (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        };
        removeEventListener: {
            <K_6 extends keyof DocumentEventMap>(type: K_6, listener: (this: Document, ev: DocumentEventMap[K_6]) => any, options?: boolean | EventListenerOptions): void;
            (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        };
        baseURI: string;
        childNodes: NodeListOf<ChildNode>;
        firstChild: ChildNode;
        isConnected: boolean;
        lastChild: ChildNode;
        nextSibling: ChildNode;
        nodeName: string;
        nodeType: number;
        nodeValue: string;
        parentElement: HTMLElement;
        parentNode: ParentNode;
        previousSibling: ChildNode;
        textContent: string;
        appendChild: <T_2 extends Node>(node: T_2) => T_2;
        cloneNode: (deep?: boolean) => Node;
        compareDocumentPosition: (other: Node) => number;
        contains: (other: Node) => boolean;
        getRootNode: (options?: GetRootNodeOptions) => Node;
        hasChildNodes: () => boolean;
        insertBefore: <T_3 extends Node>(node: T_3, child: Node) => T_3;
        isDefaultNamespace: (namespace: string) => boolean;
        isEqualNode: (otherNode: Node) => boolean;
        isSameNode: (otherNode: Node) => boolean;
        lookupNamespaceURI: (prefix: string) => string;
        lookupPrefix: (namespace: string) => string;
        removeChild: <T_4 extends Node>(child: T_4) => T_4;
        replaceChild: <T_5 extends Node>(node: Node, child: T_5) => T_5;
        ATTRIBUTE_NODE: number;
        CDATA_SECTION_NODE: number;
        COMMENT_NODE: number;
        DOCUMENT_FRAGMENT_NODE: number;
        DOCUMENT_NODE: number;
        DOCUMENT_POSITION_CONTAINED_BY: number;
        DOCUMENT_POSITION_CONTAINS: number;
        DOCUMENT_POSITION_DISCONNECTED: number;
        DOCUMENT_POSITION_FOLLOWING: number;
        DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
        DOCUMENT_POSITION_PRECEDING: number;
        DOCUMENT_TYPE_NODE: number;
        ELEMENT_NODE: number;
        ENTITY_NODE: number;
        ENTITY_REFERENCE_NODE: number;
        NOTATION_NODE: number;
        PROCESSING_INSTRUCTION_NODE: number;
        TEXT_NODE: number;
        dispatchEvent: (event: Event) => boolean;
        oncopy: (this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any;
        oncut: (this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any;
        onpaste: (this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any;
        activeElement: Element;
        adoptedStyleSheets: CSSStyleSheet[];
        fullscreenElement: Element;
        pictureInPictureElement: Element;
        pointerLockElement: Element;
        styleSheets: StyleSheetList;
        elementFromPoint: (x: number, y: number) => Element;
        elementsFromPoint: (x: number, y: number) => Element[];
        getAnimations: () => Animation[];
        fonts: FontFaceSet;
        onabort: (this: GlobalEventHandlers, ev: UIEvent) => any;
        onanimationcancel: (this: GlobalEventHandlers, ev: AnimationEvent) => any;
        onanimationend: (this: GlobalEventHandlers, ev: AnimationEvent) => any;
        onanimationiteration: (this: GlobalEventHandlers, ev: AnimationEvent) => any;
        onanimationstart: (this: GlobalEventHandlers, ev: AnimationEvent) => any;
        onauxclick: (this: GlobalEventHandlers, ev: MouseEvent) => any;
        onbeforeinput: (this: GlobalEventHandlers, ev: InputEvent) => any;
        onblur: (this: GlobalEventHandlers, ev: FocusEvent) => any;
        oncancel: (this: GlobalEventHandlers, ev: Event) => any;
        oncanplay: (this: GlobalEventHandlers, ev: Event) => any;
        oncanplaythrough: (this: GlobalEventHandlers, ev: Event) => any;
        onchange: (this: GlobalEventHandlers, ev: Event) => any;
        onclick: (this: GlobalEventHandlers, ev: MouseEvent) => any;
        onclose: (this: GlobalEventHandlers, ev: Event) => any;
        oncontextmenu: (this: GlobalEventHandlers, ev: MouseEvent) => any;
        oncuechange: (this: GlobalEventHandlers, ev: Event) => any;
        ondblclick: (this: GlobalEventHandlers, ev: MouseEvent) => any;
        ondrag: (this: GlobalEventHandlers, ev: DragEvent) => any;
        ondragend: (this: GlobalEventHandlers, ev: DragEvent) => any;
        ondragenter: (this: GlobalEventHandlers, ev: DragEvent) => any;
        ondragleave: (this: GlobalEventHandlers, ev: DragEvent) => any;
        ondragover: (this: GlobalEventHandlers, ev: DragEvent) => any;
        ondragstart: (this: GlobalEventHandlers, ev: DragEvent) => any;
        ondrop: (this: GlobalEventHandlers, ev: DragEvent) => any;
        ondurationchange: (this: GlobalEventHandlers, ev: Event) => any;
        onemptied: (this: GlobalEventHandlers, ev: Event) => any;
        onended: (this: GlobalEventHandlers, ev: Event) => any;
        onerror: OnErrorEventHandlerNonNull;
        onfocus: (this: GlobalEventHandlers, ev: FocusEvent) => any;
        onformdata: (this: GlobalEventHandlers, ev: FormDataEvent) => any;
        ongotpointercapture: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        oninput: (this: GlobalEventHandlers, ev: Event) => any;
        oninvalid: (this: GlobalEventHandlers, ev: Event) => any;
        onkeydown: (this: GlobalEventHandlers, ev: KeyboardEvent) => any;
        onkeypress: (this: GlobalEventHandlers, ev: KeyboardEvent) => any;
        onkeyup: (this: GlobalEventHandlers, ev: KeyboardEvent) => any;
        onload: (this: GlobalEventHandlers, ev: Event) => any;
        onloadeddata: (this: GlobalEventHandlers, ev: Event) => any;
        onloadedmetadata: (this: GlobalEventHandlers, ev: Event) => any;
        onloadstart: (this: GlobalEventHandlers, ev: Event) => any;
        onlostpointercapture: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onmousedown: (this: GlobalEventHandlers, ev: MouseEvent) => any;
        onmouseenter: (this: GlobalEventHandlers, ev: MouseEvent) => any;
        onmouseleave: (this: GlobalEventHandlers, ev: MouseEvent) => any;
        onmousemove: (this: GlobalEventHandlers, ev: MouseEvent) => any;
        onmouseout: (this: GlobalEventHandlers, ev: MouseEvent) => any;
        onmouseover: (this: GlobalEventHandlers, ev: MouseEvent) => any;
        onmouseup: (this: GlobalEventHandlers, ev: MouseEvent) => any;
        onpause: (this: GlobalEventHandlers, ev: Event) => any;
        onplay: (this: GlobalEventHandlers, ev: Event) => any;
        onplaying: (this: GlobalEventHandlers, ev: Event) => any;
        onpointercancel: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onpointerdown: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onpointerenter: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onpointerleave: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onpointermove: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onpointerout: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onpointerover: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onpointerup: (this: GlobalEventHandlers, ev: PointerEvent) => any;
        onprogress: (this: GlobalEventHandlers, ev: ProgressEvent<EventTarget>) => any;
        onratechange: (this: GlobalEventHandlers, ev: Event) => any;
        onreset: (this: GlobalEventHandlers, ev: Event) => any;
        onresize: (this: GlobalEventHandlers, ev: UIEvent) => any;
        onscroll: (this: GlobalEventHandlers, ev: Event) => any;
        onsecuritypolicyviolation: (this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any;
        onseeked: (this: GlobalEventHandlers, ev: Event) => any;
        onseeking: (this: GlobalEventHandlers, ev: Event) => any;
        onselect: (this: GlobalEventHandlers, ev: Event) => any;
        onselectionchange: (this: GlobalEventHandlers, ev: Event) => any;
        onselectstart: (this: GlobalEventHandlers, ev: Event) => any;
        onslotchange: (this: GlobalEventHandlers, ev: Event) => any;
        onstalled: (this: GlobalEventHandlers, ev: Event) => any;
        onsubmit: (this: GlobalEventHandlers, ev: SubmitEvent) => any;
        onsuspend: (this: GlobalEventHandlers, ev: Event) => any;
        ontimeupdate: (this: GlobalEventHandlers, ev: Event) => any;
        ontoggle: (this: GlobalEventHandlers, ev: Event) => any;
        ontouchcancel?: (this: GlobalEventHandlers, ev: TouchEvent) => any;
        ontouchend?: (this: GlobalEventHandlers, ev: TouchEvent) => any;
        ontouchmove?: (this: GlobalEventHandlers, ev: TouchEvent) => any;
        ontouchstart?: (this: GlobalEventHandlers, ev: TouchEvent) => any;
        ontransitioncancel: (this: GlobalEventHandlers, ev: TransitionEvent) => any;
        ontransitionend: (this: GlobalEventHandlers, ev: TransitionEvent) => any;
        ontransitionrun: (this: GlobalEventHandlers, ev: TransitionEvent) => any;
        ontransitionstart: (this: GlobalEventHandlers, ev: TransitionEvent) => any;
        onvolumechange: (this: GlobalEventHandlers, ev: Event) => any;
        onwaiting: (this: GlobalEventHandlers, ev: Event) => any;
        onwebkitanimationend: (this: GlobalEventHandlers, ev: Event) => any;
        onwebkitanimationiteration: (this: GlobalEventHandlers, ev: Event) => any;
        onwebkitanimationstart: (this: GlobalEventHandlers, ev: Event) => any;
        onwebkittransitionend: (this: GlobalEventHandlers, ev: Event) => any;
        onwheel: (this: GlobalEventHandlers, ev: WheelEvent) => any;
        childElementCount: number;
        children: HTMLCollection;
        firstElementChild: Element;
        lastElementChild: Element;
        append: (...nodes: (string | Node)[]) => void;
        prepend: (...nodes: (string | Node)[]) => void;
        querySelector: {
            <K_7 extends keyof HTMLElementTagNameMap>(selectors: K_7): HTMLElementTagNameMap[K_7];
            <K_8 extends keyof SVGElementTagNameMap>(selectors: K_8): SVGElementTagNameMap[K_8];
            <E extends Element = Element>(selectors: string): E;
        };
        querySelectorAll: {
            <K_9 extends keyof HTMLElementTagNameMap>(selectors: K_9): NodeListOf<HTMLElementTagNameMap[K_9]>;
            <K_10 extends keyof SVGElementTagNameMap>(selectors: K_10): NodeListOf<SVGElementTagNameMap[K_10]>;
            <E_1 extends Element = Element>(selectors: string): NodeListOf<E_1>;
        };
        replaceChildren: (...nodes: (string | Node)[]) => void;
        createExpression: (expression: string, resolver?: XPathNSResolver) => XPathExpression;
        createNSResolver: (nodeResolver: Node) => XPathNSResolver;
        evaluate: (expression: string, contextNode: Node, resolver?: XPathNSResolver, type?: number, result?: XPathResult) => XPathResult;
        storeId: string;
        store: Store;
        price: number;
        isSale: boolean;
        saleValue: number;
        Imagesproduct: string;
        tags: string[];
        categoryId: string;
        category: import("../../../category/models/category.model").Category;
        version: number;
    }>;
    listSimilarProducts(productId: string, store: Store): Promise<(import("mongoose").Document<unknown, {}, import("../../models/product.model").Product & Document> & Omit<import("../../models/product.model").Product & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
}
