import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';
import { CheckboxSkin } from '@skins/defaults';

//set all values for properties for passing them as default
const DEFAULT_PROPERTIES: AlphaElements.CheckboxProperties = {
  name: 'checkbox-name',
  value: false,
  size: 'md',
  disabled: false,
  Renderer: CheckboxSkin,
  testId: 'custom-test',
};

//seting an action for default
const DEFAULT_ACTIONS: AlphaElements.CheckBoxAction = {
  onChange: (val: any) => {
    console.log(val);
  },
};

// rendering function
const renderCheckbox = (properties = DEFAULT_PROPERTIES, actions = DEFAULT_ACTIONS) => {
  return render(<Checkbox properties={properties} actions={actions} />);
};

describe('Checkbox Component Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render a hidden checkbox input', () => {
    renderCheckbox();
    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput).toHaveClass('hidden');
  });

  it('Should render with the default value unchecked', () => {
    renderCheckbox();
    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).not.toBeChecked();
  });

  it('Should render with the value checked when passed as true', () => {
    const properties = { ...DEFAULT_PROPERTIES, value: true };
    renderCheckbox(properties);
    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toBeChecked();
  });

  it('Should select the click element', async () => {
    renderCheckbox();
    const checkboxSkin = await screen.findByTestId(DEFAULT_PROPERTIES.testId!);
    expect(checkboxSkin).toBeInTheDocument();
    await fireEvent.click(checkboxSkin);
    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toBeChecked();
  });

  it('Should render as disabled when the disabled property is true', () => {
    const properties = { ...DEFAULT_PROPERTIES, disabled: true };
    renderCheckbox(properties);
    const checkboxInput = screen.getByRole('checkbox');
    expect(checkboxInput).toBeDisabled();
  });

  it('Should use the default renderer', () => {
    renderCheckbox();

    // Check if an element specific to the DefaultSkin renderer is in the document
    const renderedElement = screen.getByRole('checkbox'); // Adjust the query to match what DefaultSkin renders
    expect(renderedElement).toBeInTheDocument();
  });

  it('Should pass properties and actions to the renderer', () => {
    // Create the test CustomRenderer for skin
    const CustomRenderer = vi.fn(() => <div data-testid="custom-renderer" />);

    const properties = {
      name: 'checkbox-x',
      value: true,
      Renderer: CustomRenderer,
    };
    // pass a funcyion for onchange action
    const actions = { onChange: vi.fn() };

    // Render the Checkbox component
    render(<Checkbox properties={properties} actions={actions} />);

    // Assert that CustomRenderer was called with the correct props
    expect(CustomRenderer).toHaveBeenCalledWith(
      expect.objectContaining({
        properties: { name: 'checkbox-x', value: true },
        actions: expect.any(Object), // Ensure actions object is passed
      }),
      expect.anything(), // Children, if any, passed as the second argument
    );
  });
});
