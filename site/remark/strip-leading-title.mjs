// Remark plugin: strip the leading title block from a document body when it is
// rendered on the website. The resource page already shows the title and
// subtitle (from frontmatter) in a styled header, so rendering the document's
// own title again would duplicate it and create two <h1>s on the page.
//
// It removes only the leading run of heading nodes (the title, subtitle, and
// attribution lines at the very top), plus one thematic break immediately
// after them. A lead paragraph that comes before the first rule is preserved.
//
// This affects the website only. The downloadable .md files are copied
// verbatim from /content and keep their full title block.
export default function stripLeadingTitle() {
  return (tree) => {
    const children = tree.children;
    let i = 0;
    while (i < children.length && children[i].type === "heading") i++;
    if (i < children.length && children[i].type === "thematicBreak") i++;
    if (i > 0) children.splice(0, i);
  };
}
