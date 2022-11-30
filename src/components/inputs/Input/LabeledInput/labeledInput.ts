import Block from '../../../../utils/Block';
import { Input } from '../input';
import template from './labeledInput.hbs';
import * as styles from './labeledInput.scss';
import { validateInput } from '../../../../utils/validateInput';

interface LabeledInputProps {
  labelText?: string,
  type: string,
  name: string,
  id: string,
  disabled?: boolean,
  placeholder?: string,
  value?: string
  events?: {
    blur?: (event: Event) => void;
    focus?: (event: Event) => void;
  }
}

export class LabeledInput extends Block {
  constructor(props: LabeledInputProps) {
    super(props);
  }

  protected init() {
    this.setProps({ styles });

    this.children.input = new Input({
      type: this.props.type,
      name: this.props.name,
      id: this.props.id,
      disabled: this.props.disabled,
      value: this.props.value,
      placeholder: this.props.placeholder,
      events: {
        blur: validateInput,
        focus: validateInput,
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
