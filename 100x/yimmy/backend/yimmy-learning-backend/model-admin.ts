
const learn = true
/*
Q1. Why we use interface , although we can write without unterface

Ans : 
Using interfaces in TypeScript:

1. **Type Safety**: Ensures correct data types, reducing runtime errors.
2. **Code Documentation**: Clearly describes the structure of objects, enhancing code understanding.
3. **Code Maintainability**: Establishes contracts, making updates easier.
4. **Code Readability**: Improves clarity by providing descriptive names for object shapes.
5. **Type Inference**: Enables compiler to infer types, reducing need for explicit annotations.
6. **Object Composition**: Supports building complex types from simpler ones, promoting code reuse.

Q2. Write the code without using interface ?

Ans : 
import { v4 as uuid4 } from 'uuid';
import mongoose, { Document, Schema } from 'mongoose';

const adminSchema: Schema<Document> = new Schema({
    _id: { type: String, default: uuid4 },
    username: { type: String, required: [true, 'Username is required'] },
    password: { type: String, required: [true, 'Password is required'], minLength: [6, "Password must be at least 6 characters"] },
});

export default mongoose.model("courseAdmin", adminSchema);

Q3. 

*/

export default learn;
