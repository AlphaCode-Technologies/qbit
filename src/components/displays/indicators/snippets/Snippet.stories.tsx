import { StoryFn } from '@storybook/react';
import Snippet from './Snippet';
import { SnippetSkin } from '@skins/defaults';

export default {
  title: 'Qbit design/Displays/Indicators/Snippets',
  component: Snippet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample HTML</title>
  <style>
    body { font-family: Arial, sans-serif; }
    h1 { color: #333; }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a sample HTML page.</p>
</body>
</html>
`;

const jsCode = `
function addNumbers(a, b) {
    return a + b;
}

function isEven(number) {
    return number % 2 === 0;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log("5 + 7 =", addNumbers(5, 7));
console.log("Is 8 even?", isEven(8));
`;

const pythonCode = `
def add_numbers(a, b):
    return a + b

def is_even(number):
    return number % 2 == 0

def celsius_to_fahrenheit(celsius):
    return (celsius * 9 / 5) + 32

# Test functions
print("5 + 7 =", add_numbers(5, 7))
print("Is 8 even?", is_even(8))
`;

const javaCode = `
public class SampleFunctions {

    // Basic Utility Functions
    public static int addNumbers(int a, int b) {
        return a + b;
    }

    public static boolean isEven(int number) {
        return number % 2 == 0;
    }

    public static double celsiusToFahrenheit(double celsius) {
        return (celsius * 9/5) + 32;
    }

    // Main method to test the functions
    public static void main(String[] args) {
        System.out.println("5 + 7 = " + addNumbers(5, 7));
        System.out.println("Is 8 even? " + isEven(8));
    }
}
`;

const cssCode = `
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

h1 {
    color: #333;
    font-size: 24px;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
`;

const otherCode = `
// This is a comment in some other language (e.g., pseudocode)
BEGIN
    PRINT "Hello, World!"
    END
`;

const Template: StoryFn = (args: any) => <Snippet {...args} keyExtractor={(_: any, i: number) => `${i}`} />;

// HTML Code Snippet Story
export const HtmlSnippet = Template.bind({});
HtmlSnippet.args = {
  value: htmlCode,
  language: 'HTML',
  renderers: { renderer: SnippetSkin },
};

// JavaScript Code Snippet Story
export const JsSnippet = Template.bind({});
JsSnippet.args = {
  value: jsCode,
  language: 'JavaScript',
  renderers: { renderer: SnippetSkin },
};

// Python Code Snippet Story
export const PythonSnippet = Template.bind({});
PythonSnippet.args = {
  value: pythonCode,
  language: 'Python',
  renderers: { renderer: SnippetSkin },
};

// Java Code Snippet Story
export const JavaSnippet = Template.bind({});
JavaSnippet.args = {
  value: javaCode,
  language: 'Java',
  renderers: { renderer: SnippetSkin },
};

// CSS Code Snippet Story
export const CssSnippet = Template.bind({});
CssSnippet.args = {
  value: cssCode,
  language: 'CSS',
  renderers: { renderer: SnippetSkin },
};

// Other Language Code Snippet Story (Pseudocode or others)
export const OtherSnippet = Template.bind({});
OtherSnippet.args = {
  value: otherCode,
  language: 'Other',
  renderers: { renderer: SnippetSkin },
};
