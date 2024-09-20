// ===================================== DECORATORS =====================================
// Decorators are a design pattern that is used to separate modification or decoration of a class without modifying the 
// original class.  Decorators are a special kind of declaration that can be attached to a class declaration, method, accessor, 
// property, or parameter.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// In order to enable decorators in TypeScript, you need to enable the experimentalDecorators compiler option either in your
// tsconfig.json file or when you are running the TypeScript compiler.
//  "experimentalDecorators": true,           /* Enable experimental support for legacy experimental decorators. */
// ===================================== CLASS DECORATORS =====================================
// Creating a decorator is simple.  A decorator is a function that is prefixed with the @ symbol, and is applied to the class
// immediately following the class declaration
function Component(constructor) {
    console.log('Component Decorator called');
    constructor.prototype.uniqueID = Date.now();
    constructor.prototype.insertInDOM = function () {
        console.log('Inserting the component into DOM');
    };
}
// @Component
// class ProfileComponent {
// }
// We could also solve this problem using inheritance. Instead of using a decorator, we could create a base class. 
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
    }
    BaseComponent.prototype.insertInDOM = function () {
        console.log('Inserting the component into DOM');
    };
    return BaseComponent;
}());
// @Component
var ProfileComponent = /** @class */ (function (_super) {
    __extends(ProfileComponent, _super);
    function ProfileComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProfileComponent;
}(BaseComponent));
// Decorator Factory -  This function is acting as a Factory for creating a decorator
function Component2(options) {
    return function (constructor) {
        console.log('Component Decorator called');
        constructor.prototype.uniqueID = Date.now();
        constructor.prototype.options = options;
        constructor.prototype.insertInDOM = function () {
            console.log('Inserting the component into DOM');
        };
    };
}
// We are passing an object as an argument to the decorator, in this case we are passing an element in the DOM as a selector
var ParameterProfileComponent = function () {
    var _classDecorators = [Component2({ selector: '#my-profile' })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ParameterProfileComponent = _classThis = /** @class */ (function () {
        function ParameterProfileComponent_1() {
        }
        return ParameterProfileComponent_1;
    }());
    __setFunctionName(_classThis, "ParameterProfileComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ParameterProfileComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ParameterProfileComponent = _classThis;
}();
// ===================================== DECORATOR COMPOSITION =====================================
// You can apply multiple decorators to a single class.  The decorators are applied in the order they are listed.  The first
// decorator listed is the first one that is executed.
function Pipe(constructor) {
    console.log('Pipe Decorator called');
    constructor.prototype.pipe = true;
}
var Pipe_ProfileComponent = function () {
    var _classDecorators = [Component2({ selector: '#my-profile' }), Pipe];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Pipe_ProfileComponent = _classThis = /** @class */ (function () {
        function Pipe_ProfileComponent_1() {
        }
        return Pipe_ProfileComponent_1;
    }());
    __setFunctionName(_classThis, "Pipe_ProfileComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Pipe_ProfileComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Pipe_ProfileComponent = _classThis;
}();
// ===================================== METHOD DECORATORS =====================================
// Method decorators are applied to the method of a class.  The method decorator is applied to the method immediately following
// the method declaration.
function Log(target, methodName, descriptor) {
    var original = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Before");
        original.call(this, args);
        console.log("After");
    };
}
var Person = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _say_decorators;
    return _a = /** @class */ (function () {
            function Person() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            Person.prototype.say = function (message) {
                console.log('Person says: ' + message);
            };
            return Person;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _say_decorators = [Log];
            __esDecorate(_a, null, _say_decorators, { kind: "method", name: "say", static: false, private: false, access: { has: function (obj) { return "say" in obj; }, get: function (obj) { return obj.say; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
// ===================================== ACCESSOR DECORATORS =====================================
// Accessor decorators are applied to the GETTER or SETTER of a class.  The accessor decorator is applied to the accessor
// immediately following the accessor declaration.
// accessor dec => Capitalize all the letters in string (getter for fullName)
function Capitalize(target, propertyName, descriptor) {
    var original = descriptor.get;
    descriptor.get = function () {
        return original.call(this).toUpperCase();
    };
}
var Person2 = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _get_fullName_decorators;
    return _a = /** @class */ (function () {
            function Person2(_firstName, _lastName) {
                if (_firstName === void 0) { _firstName = 'John'; }
                if (_lastName === void 0) { _lastName = 'Doe'; }
                this._firstName = (__runInitializers(this, _instanceExtraInitializers), _firstName);
                this._lastName = _lastName;
            }
            Object.defineProperty(Person2.prototype, "fullName", {
                get: function () {
                    return this._firstName + ' ' + this._lastName;
                },
                enumerable: false,
                configurable: true
            });
            return Person2;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _get_fullName_decorators = [Capitalize];
            __esDecorate(_a, null, _get_fullName_decorators, { kind: "getter", name: "fullName", static: false, private: false, access: { has: function (obj) { return "fullName" in obj; }, get: function (obj) { return obj.fullName; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var person = new Person2('John', 'Doe');
console.log(person.fullName); // JOHN DOE
