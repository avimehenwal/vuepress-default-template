<template>
  <div id="vuepress-theme-blog__tags-layout">
    <BlogTags :tags="$frontmatterKey.list" />
    {{ $page }}
  </div>
</template>
