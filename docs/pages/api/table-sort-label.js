import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from './table-sort-label.md';

function Page() {
  return <MarkdownDocs markdown={markdown} />;
}

export default Page;
