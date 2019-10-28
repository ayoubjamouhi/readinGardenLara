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
            <input
              type="file"
              name="file"
              id="image"
              @change="uploadFile"
              placeholder="Upload an Image"
            />
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
      html: "<p>Html</p>",
      image: null,
      largeImage: null
    };
  },
  methods: {
    checkForm(e) {
      e.preventDefault();

      this.errors = [];

      if (!this.title || !this.title || !this.title || !this.title) {
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
        image: this.image,
        largeImage: this.largeImage,
        user_id: "admin"
      };

      axios
        .post("/posts", data)
        .then(function(response) {
          window.location.href = "/" + response.data.slug;
        })
        .catch(function(error) {
          alert(error.message);
        });
    },
    uploadFile: async function(e) {
      const { files } = e.target;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "readingarden_lara");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dzgho0ttb/image/upload",
        {
          method: "POST",
          body: data
        }
      );
      const file = await res.json();

      this.image = file.secure_url;
      this.largeImage = file.eager[0].secure_url;
    }
  }
};
</script>