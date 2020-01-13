/*
 * @Description: 测试
 * @Author: sundanlong
 * @Date: 2020-01-13 17:03:17
 */
import { Greeter } from '../index';

test('My Greeter', () => {
    expect(Greeter('张三')).toBe('Hello 张三');
});