import {EditorView} from "@codemirror/view";
import {HighlightStyle, syntaxHighlighting} from "@codemirror/language";
import {tags} from "@lezer/highlight";

const themeExtension = EditorView.theme({
    '&': {
        backgroundColor: "var(--background-primary)",
        color: "var(--text-normal)",
    },
    '.cm-gutters': {
        backgroundColor: "#282a36",
        color: "#6D8A88",
    },
    ".cm-content": {
        caretColor: "#f8f8f0",
        padding: "0 0 4px 0"
    },
    "&.cm-focused .cm-cursor": {
        borderLeftColor: "#f8f8f0"
    },
    '&.cm-focused .cm-selectionBackground, & .cm-selectionLayer .cm-selectionBackground, .cm-content ::selection': {
        backgroundColor: "rgba(255, 255, 255, 0.1)"
    },
    '.cm-activeLine': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    '& .cm-selectionMatch': {
        backgroundColor: "rgba(255, 255, 255, 0.2)"
    }
}, {dark: true})

const markdownHighlighting = HighlightStyle.define([
    {tag: tags.heading, textDecoration: "underline", fontWeight: "bold", class: ""},
    {tag: tags.heading1, class: "h1", fontWeight: "bold"},
    {tag: tags.heading2, class: "h2"},
    {tag: tags.heading3, class: "h3"},
    {tag: tags.heading4, class: "h4"},
    {tag: tags.heading5, class: "h5"},
    {tag: tags.heading6, class: "h6"},
    {tag: tags.link, textDecoration: "underline", class: 'cm-link'},
    {tag: tags.url, fontWeight: "bold", class: "cm-url"},
    {tag: tags.quote, fontWeight: "bold", class: "quote"},
    {tag: tags.emphasis, fontStyle: "italic"},
    {tag: tags.strong, fontWeight: "bold"},
    {tag: tags.comment, color: '#6272a4'},
    {tag: tags.string, color: '#f1fa8c'},
    {tag: tags.atom, color: '#bd93f9'},
    {tag: tags.meta, color: '#f8f8f2'},
    {tag: [tags.keyword, tags.operator, tags.tagName, tags.labelName], color: '#ff79c6'},
    {tag: [tags.function(tags.propertyName), tags.propertyName], color: '#66d9ef'},
    {
        tag: [tags.definition(tags.variableName), tags.function(tags.variableName), tags.className, tags.attributeName],
        color: '#50fa7b'
    },
]);

export const Theme = [themeExtension, syntaxHighlighting(markdownHighlighting)];