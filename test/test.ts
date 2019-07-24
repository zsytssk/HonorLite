import { Test, mapTest } from './testBuilder';
import { TestBuilderCtor } from './testBuilder/testBuilder';
import { getTestEnable, getTestIgnore } from './utils/testUtils';
import honorSpec from './honor/honor.spec';
declare global {
    interface Window {
        test: typeof test;
    }
}

const testScope = new Test('top');
testScope.addChild(honorSpec);
const testBuilder = new TestBuilderCtor(testScope, { is_on: true });
testBuilder.enableDisableTest(getTestEnable(), getTestIgnore());
testBuilder.init();

export const test = mapTest(testBuilder.top_scope);
window.test = test;
