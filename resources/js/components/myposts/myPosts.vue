<template>
  <form @submit="checkForm" method="post">
    <div class="card-body">
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" v-model="title" />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="description">Description</label>
            <input type="text" name="description" id="description" v-model="description" />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="categorie">Categorie</label>
            <select name="categorie" id="categorie" v-model="categorie">
              <option>--</option>
              <option value="javascript">Javascript</option>
              <option value="healty">Health</option>
            </select>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="slug">Slug</label>
            <input type="text" name="slug" id="slug" v-model="slug" />
          </div>
        </div>

        <div class="col-12">
          <div class="form-group">
            <label for="is_featured">is Featured</label>
            <select name="is_featured" id="is_featured" v-model="is_featured">
              <option>--</option>
              <option value="1">Yes</option>}
              <option value="0">No</option>
            </select>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="image">image</label>
            <input type="file" name="image" id="image" />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="credit">Credit</label>
            <input type="text" name="credit" id="credit" v-model="credit" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <label>HTML</label>
          <textarea name="html" id="html" v-model="html"></textarea>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <button type="submit" size="sm" color="success">
        <i class="fa fa-dot-circle-o"></i> Sauvegarder
      </button>
      <button type="reset" size="sm" color="danger">
        <i class="fa fa-ban"></i> Vider
      </button>
    </div>
  </form>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      errors: [],
      title: "Title",
      description: "Description",
      categorie: "javascript",
      slug: "slug",
      credit: "credit",
      is_featured: 0,
      html: "<p>Html</p>"
    };
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault();
      console.log(this.title);

      this.errors = [];

      if (!this.title) {
        this.errors.push("Name required.");
      }
      const data = {
        title: this.title,
        description: this.description,
        categorie: this.categorie,
        slug: this.slug,
        credit: this.credit,
        is_featured: this.is_featured,
        html: this.html,
        image_id: "image",
        user_id: "admin"
      };
      console.log(data);
      axios
        .post("/articles", data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>