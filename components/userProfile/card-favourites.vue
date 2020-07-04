<template>
  <div class="card-information favouriteBx">
    <div class="card-header">
      Favourites
      <div class="action">
        <a href="#" class="Expand">
          <img src="~/assets/images/card/card-expand.svg" alt="" />
        </a>
      </div>
    </div>
    <div class="card-body">
      <ul class="Favourite-list">
        <li>
          <img src="~/assets/images/all/bookmark.svg" alt="" />
          <p>Microsoft Team</p>
        </li>
        <li>
          <img src="~/assets/images/all/bookmark.svg" alt="" />
          <p>Document Library</p>
        </li>
        <li>
          <img src="~/assets/images/all/bookmark.svg" alt="" />
          <p>Promotions</p>
        </li>
        <li>
          <img src="~/assets/images/all/bookmark.svg" alt="" />
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
