import { shallowMount } from '@vue/test-utils';
import SignupForm from './SignupForm.vue';

describe('SignupForm.vue', () => {
  test('username은 이메일 형식이 아니면 경고 메세지가 보인다', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'okCafe@x',
        };
      },
    });

    const warningText = wrapper.find('.warning');
    expect(warningText.exists()).toBeTruthy();
  });

  test('가입이 성공하면 logMessage는 가입되었다고 나와야 한다', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'seok@barogo.com',
          password: '1234',
        };
      },
    });

    const registerUser = jest.fn().mockResolvedValue({
      data: {
        username: 'seok@barogo.com',
      },
    });

    const logText = wrapper.find('.log');
    console.log(logText.text());

    // expect(logText.element).toBe(`${wrapper.vm.username} 님이 가입되었습니다`);
  });
});
