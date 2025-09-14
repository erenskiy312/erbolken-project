"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.OutlineDark = exports.Outline = exports.Clear = exports.Primary = void 0;
var ThemeProvider_1 = require("app/providers/ThemeProvider");
var ThemeDecorator_1 = require("shared/config/storybook/ThemeDecorator/ThemeDecorator");
var Button_1 = require("./Button");
exports["default"] = {
    title: 'shared/Button',
    component: Button_1.Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
};
var Template = function (args) { return React.createElement(Button_1.Button, __assign({}, args)); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    children: 'Text'
};
exports.Clear = Template.bind({});
exports.Clear.args = {
    children: 'Text',
    theme: Button_1.ButtonTheme.CLEAR
};
exports.Outline = Template.bind({});
exports.Outline.args = {
    children: 'Text',
    theme: Button_1.ButtonTheme.OUTLINE
};
// export const OutlineSizeL = Template.bind({});
// OutlineSizeL.args = {
//   children: 'Text',
//   theme: ButtonTheme.OUTLINE,
//   size: ButtonSize.L,
// };
// export const OutlineSizeXL = Template.bind({});
// OutlineSizeXL.args = {
//   children: 'Text',
//   theme: ButtonTheme.OUTLINE,
//   size: ButtonSize.XL,
// };
exports.OutlineDark = Template.bind({});
exports.OutlineDark.args = {
    children: 'Text',
    theme: Button_1.ButtonTheme.OUTLINE
};
exports.OutlineDark.decorators = [ThemeDecorator_1.ThemeDecorator(ThemeProvider_1.Theme.DARK)];
// export const BackgroundTheme = Template.bind({});
// BackgroundTheme.args = {
//   children: 'Text',
//   theme: ButtonTheme.BACKGROUND,
// };
// export const BackgroundInverted = Template.bind({});
// BackgroundInverted.args = {
//   children: 'Text',
//   theme: ButtonTheme.BACKGROUND_INVERTED,
// };
// export const Square = Template.bind({});
// Square.args = {
//   children: '>',
//   theme: ButtonTheme.BACKGROUND_INVERTED,
//   square: true,
// };
// export const SquareSizeL = Template.bind({});
// SquareSizeL.args = {
//   children: '>',
//   theme: ButtonTheme.BACKGROUND_INVERTED,
//   square: true,
//   size: ButtonSize.L,
// };
// export const SquareSizeXL = Template.bind({});
// SquareSizeXL.args = {
//   children: '>',
//   theme: ButtonTheme.BACKGROUND_INVERTED,
//   square: true,
//   size: ButtonSize.XL,
// };
