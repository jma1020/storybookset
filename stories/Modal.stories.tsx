import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./Modal";

export default {
  // 분류 및 작명
  title: "Components/Modal",
  // 렌더링 타켓
  component: Modal,
  // 공통 args
  args: {
    title: "제목 입니다",
  },
} as ComponentMeta<typeof Modal>;

// 기본 템플릿
const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>MODAL 입니다</Modal>
);

// 템플릿 활용해서 상황별 args 추가
export const FullModal = Template.bind({});
FullModal.args = {
  show: true,
  onClose: () => console.log("닫기"),
  size: "full",
};

export const MiniModal = Template.bind({});
MiniModal.args = {
  ...FullModal.args,
  size: "mini",
};
