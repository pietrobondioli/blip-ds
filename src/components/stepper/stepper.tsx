import { Component, ComponentInterface, h, Element, Method } from '@stencil/core';
@Component({
  tag: 'bds-stepper',
  styleUrl: 'stepper.scss',
  shadow: true,
})
export class BdsStepper implements ComponentInterface {
  @Element() el: HTMLBdsStepperElement;

  connectedCallback() {
    for (const [index, option] of this.childOptions.entries()) {
      option.index = index;

      if (index === this.childOptions.length - 1) {
        option.last = true;
      }
    }
  }

  /**
   * Set the active step
   *
   * @param index The index of the step to be set as active
   * @returns void
   */
  @Method()
  public async setActiveStep(index: number): Promise<void> {
    this.resetActiveSteps();
    this.childOptions[index].active = true;
  }

  /**
   * Set the completed step
   *
   * @param index The index of the step to be set as completed
   * @returns void
   */
  @Method()
  public async setCompletedStep(index: number): Promise<void> {
    this.childOptions[index].completed = true;
  }

  /**
   * Returns the active step
   *
   * @returns HTMLBdsStepElement
   */
  @Method()
  public async getActiveStep(): Promise<number> {
    return this.childOptions.find((step) => step.active === true).index;
  }

  /**
   * Reset all active steps
   *
   * @returns void
   */
  @Method()
  public async resetActiveSteps() {
    for (const step of this.childOptions) {
      step.active = false;
    }
  }

  /**
   * Reset all completed steps
   *
   * @returns void
   */
  @Method()
  public async resetCompletedSteps() {
    for (const step of this.childOptions) {
      step.completed = false;
    }
  }

  private get childOptions() {
    return Array.from(this.el.querySelectorAll('bds-step'));
  }

  render() {
    return (
      <div class="stepper__container">
        <slot />
      </div>
    );
  }
}