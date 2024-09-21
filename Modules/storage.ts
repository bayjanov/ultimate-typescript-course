export default class Store {}

export enum Format { Raw, Compressed }

class Compressor {}

class Encryptor {}


// default export helps hide the complexity of the module, the implementation details are hidden. 
// The user of the module doesn't need to know the details of the module.
// If we export the Compressor and Encryptor classes, the user might use them and become dependent on them. If we decide to change the implementation of the module, the user's code will break.

// So this helps us avoid coupling between modules.