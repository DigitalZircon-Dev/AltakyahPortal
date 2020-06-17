<template>
  <div class="card-information">
    <div class="card-header">
      Favourites
      <div class="action">
        <a href="#" class="addBtn">
          <img src="/images/card/card-plus.svg" alt="" />
          Add
        </a>
        <a href="#" class="Expand">
          <img src="/images/card/card-expand.svg" alt="" />
        </a>
      </div>
    </div>
    <div class="card-body">
      <ul class="Favourite-list">
        <li>
          <img src="/images/all/bookmark.svg" alt="" />
          <p>Microsoft Team</p>
        </li>
        <li>
          <img src="/images/all/bookmark.svg" alt="" />
          <p>Document Library</p>
        </li>
        <li>
          <img src="/images/all/bookmark.svg" alt="" />
          <p>Promotions</p>
        </li>
        <li>
          <img src="/images/all/bookmark.svg" alt="" />
          <p>Microsoft</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'cardFavourites'
}
</script>
