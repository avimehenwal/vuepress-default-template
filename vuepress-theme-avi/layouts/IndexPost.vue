<template>
  <section>
    <div class="container">
      <div v-for="item in $pagination.pages" :key="item.paginationIndex" class="item">
        <a :href="item.path">
          <div v-if="item.featuredimg">
            <img :src="item.featuredimg" :alt="item.featuredimg" style="width:100%" />
          </div>
          <div v-else>
            <img src="https://picsum.photos/300/200.webp" />
          </div>

          <div>
            <h2>
              <b>{{ item.title }}</b>
            </h2>
            <p>{{ item.readingTime.text}}</p>
          </div>
        </a>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <router-link :to="first" tag="a">&laquo;</router-link>
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink" tag="a">&#8249;</router-link>
      <router-link :to="item.path" tag="a"
        v-for="(item, index) in $pagination._paginationPages" :key="item.path"
        :class="{active: ($route.path === item.path) ? true : false }"
      >{{ index }}</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">&#8250;</router-link>
      <router-link :to="last" tag="a">&raquo;</router-link>
    </div>
    <span>{{ nowDisplaying }} / {{ total }}</span>

    <div>
      <ul id="default-layout">
        <li v-for="page in $pagination.pages" :key="page.path">
          <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
        </li>
      </ul>
      <div id="pagination"></div>
    </div>
    <br />
    {{ nowDisplaying }}
    <br />
  </section>
</template>


<script>
/**
 * NOTE pagination API
 * [ "_prevText", "_nextText", "paginationIndex", "_paginationPages", "_currentPage", "_matchedPages" ]
 * [ { "path": "/post/", "interval": [ 0, 1 ] },
 *     { "path": "/post/page/2/", "interval": [ 2, 3 ] },
 *     { "path": "/post/page/3/", "interval": [ 4, 5 ] } ]
 */
export default {
  mounted() {
    console.log(this.$pagination);
  },
  method: {},
  computed: {
    first() {
      return this.$pagination._paginationPages[0].path;
    },
    last() {
      return this.$pagination._paginationPages[
        this.$pagination._paginationPages.length - 1
      ].path;
    },
    total() {
      return this.$pagination._matchedPages.length;
    },
    nowDisplaying() {
      return this.$pagination._currentPage.interval;
    },
  },
};
</script>

<style lang="stylus" scoped>
html {
  background-color: #f0f0f0;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  // width: 40%;
}

.item {
  display: flex;
  flex: 1;
  order: 1;
  flex-grow: 0;
  border: 1px red solid;
  margin: 1em;
  background-image: linear-gradient(-90deg, #dedede, #fff);
}

.container:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.pagination {
  display: inline-block;
  margin-top: 20px;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
  margin: 0 4px;
}

.pagination a.active {
  background-color: #3eaf7c;
  color: white;
  border-radius: 5px;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
  border-radius: 5px;
}
</style>