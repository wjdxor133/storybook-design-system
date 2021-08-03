/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
// import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Icon from "../Icon/Icon";

export default {
  title: "components/Button",
  component: Button,
  // decorators: [
  //   withKnobs,
  //   // (story) => (
  //   //   <div style={{ display: "flex", justifyContent: "center" }}>{story()}</div>
  //   // ),
  // ],
  // args: {
  //   children: "Button", // 버튼 스토리북 모든 버튼의 텍스트 설정
  // },
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary"],
      },
    },
  },
} as Meta;

// export const button = () => {
//   const label = text("children", "BUTTON");
//   const size = select("size", ["small", "medium", "big"], "medium");
//   const theme = select(
//     "theme",
//     ["primary", "secondary", "tertiary"],
//     "primary"
//   );
//   const disabled = boolean("disabled", false);
//   const width = text("width", "");

//   return (
//     <Button
//       size={size}
//       theme={theme}
//       disabled={disabled}
//       width={width}
//       onClick={action("onClick")}
//     >
//       {label}
//     </Button>
//   );
// };

// button.story = {
//   name: "Default",
// };

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const primaryButton = Template.bind({});
primaryButton.args = {
  children: "PRIMARY",
};

export const secondaryButton = Template.bind({});
secondaryButton.args = {
  theme: "secondary",
  children: "SECONDARY",
};

export const tertiaryButton = Template.bind({});
tertiaryButton.args = {
  theme: "tertiary",
  children: "TERTIARY",
};

// export const primaryButton = () => {
//   return <Button>PRIMARY</Button>;
// };

// export const secondaryButton = () => {
//   return <Button theme="secondary">SECONDARY</Button>;
// };

// export const tertiaryButton = () => {
//   return <Button theme="tertiary">TERTIARY</Button>;
// };

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Small</div>
        <Button size="small">BUTTON</Button>
      </div>
      <div>
        <div className="description">Medium</div>
        <Button size="medium">BUTTON</Button>
      </div>
      <div>
        <div className="description">Big</div>
        <Button size="big">BUTTON</Button>
      </div>
    </div>
  );
};

export const disabled = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button disabled>PRIMARY</Button>
      </div>
      <div>
        <Button disabled theme="secondary">
          SECONDARY
        </Button>
      </div>
      <div>
        <Button disabled theme="tertiary">
          TERTIARY
        </Button>
      </div>
    </div>
  );
};

export const customSized = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button width="20rem">CUSTOM WIDTH</Button>
      </div>
      <div>
        <Button width="100%">FULL WIDTH</Button>
      </div>
    </div>
  );
};

export const withIcon = () => {
  return (
    <div>
      <ButtonGroup>
        <Button size="small">
          <Icon icon="heart" /> LIKE
        </Button>
        <Button>
          <Icon icon="heart" /> LIKE
        </Button>
        <Button size="big">
          <Icon icon="heart" /> LIKE
        </Button>
      </ButtonGroup>
    </div>
  );
};

export const iconOnly = () => {
  return (
    <div>
      <ButtonGroup>
        <Button iconOnly size="small">
          <Icon icon="heart" />
        </Button>
        <Button iconOnly>
          <Icon icon="heart" />
        </Button>
        <Button iconOnly size="big">
          <Icon icon="heart" />
        </Button>
      </ButtonGroup>
    </div>
  );
};
