# Good Companies Templates

## How To

### Lists

Each top level list starts with `{% call blocks.normal_list() %}` or `{% call block.legal_list() %}` and ends with `{% endcall %}`

Each inner list (nested lists) starts with `<text:list>` and ends with `</text:list>`. Nested lists should be in a list item of their parent.

List items are defined between `<text:list-item>` and `</text:list-item>`. Test within list items needs to be between `<text:p text:style-name="text_normal">` and `</text:p>`, otherwise the text wont be visible.
