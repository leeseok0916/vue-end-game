import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID가 이메일 형식이 아니면 경고 메세지가 출력된다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test@ab',
        };
      },
    });
    // const usernameHtml = wrapper.find('#username');
    // console.log(usernameHtml.html());
    // console.log(usernameHtml.element.value);
    // console.log(wrapper.vm.isUsernameValid); // computed에 접근 가능
    // expect(wrapper.vm.isUsernameValid).toBeTruthy();

    const warningText = wrapper.find('.warning');
    console.log(warningText);

    expect(warningText.exists()).toBeTruthy();
  });

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });

    const submitButton = wrapper.find('button.btn');

    expect(submitButton.element.disabled).toBeTruthy();
  });
});
