declare namespace AlphaElements {
  type Action = {
    [key: string]: function;
  };

  type Actions = Action[];

  type InputNode = {
    [key: string]: function | string;
  };

  type Inputs = InputNode[];

  type OutputNode = {
    [key: string]: function | string;
  };

  type Outputs = OutputNode[];

  type Manifest = {
    name: string;

    actions: Actions;
    inputs: Inputs;
    outputs: Outputs;
  };
}
