import { shallowMount } from '@vue/test-utils';
import AddCalculator from '@/components/AddCalculator.vue';

describe('AddCalculator.vue', () => {
  test('컴포넌트가 정상적으로 렌더링 되는가', () => {
    const wrapper = shallowMount(AddCalculator);
    expect(wrapper.find('[data-test="add-calculator"]')
      .exists())
      .toBe(true);
  });

  test('필요한 요소들이 렌더링 되는가', () => {
    const wrapper = shallowMount(AddCalculator);
    expect(wrapper.findAll('[data-test="input"]'))
      .toHaveLength(2);
    expect(wrapper.find('[data-test="button"')
      .exists())
      .toBe(true);
    expect(wrapper.find('[data-test="answer"')
      .exists())
      .toBe(true);
  });
  test('값이 입력되지 않으면 적절한 메시지를 보여주는가', () => {
    const wrapper = shallowMount(AddCalculator, {
      data() {
        return {
          num1: 1,
          num2: undefined,
        };
      },
    });
    expect(wrapper.find('[data-test="message"]')
      .isVisible())
      .toBe(true);
  });
  test('값이 정상적으로 입력이 되면 메시지를 보여주지 않는가', () => {
    const wrapper = shallowMount(AddCalculator, {
      data() {
        return {
          num1: 1,
          num2: 2,
        };
      },
    });
    expect(wrapper.find('[data-test="message"]')
      .isVisible())
      .toBeFalsy();
  });
  test('입력 값을 설정하였을 때 두 값이 더해질경우 정상적으로 결과가 나오는가', async () => {
    const wrapper = shallowMount(AddCalculator);
    const answer = wrapper.find('[data-test="answer"]');
    const button = wrapper.find('[data-test="button"]');
    const inputs = wrapper.findAll('[data-test="input"]');
    await inputs[0].setValue(1);
    await inputs[1].setValue(2);
    await button.trigger('click');
    expect(answer.text())
      .toBe('3');
  });

  test('입력 값을 설정하였을 때 한 가지 입력되고 나머지 값이 존재하지 않는경우 결과는 계산할 수 없음이라고 표시되는가', async () => {
    const wrapper = shallowMount(AddCalculator);
    const answer = wrapper.find('[data-test="answer"]');
    const button = wrapper.find('[data-test="button"]');
    const inputs = wrapper.findAll('[data-test="input"]');
    await inputs[0].setValue(1);
    await button.trigger('click');
    expect(answer.text())
      .toBe('계산할 수 없음');
  });
});
