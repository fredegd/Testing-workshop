import {add, subtract} from './utils';

describe('utils',()=>{
    describe('add',()=>{
        it('should add two numbers',()=>{
            expect(add(1,2)).toBe(3);
        })
    })
    describe('subtract',()=>{
        it('should subtract two numbers',()=>{
            expect(subtract(2,1)).toBe(1);
        })
    })
})