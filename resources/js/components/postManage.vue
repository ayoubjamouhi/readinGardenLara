<template>
  <form @submit="checkForm" method="post">
    <div class="card-body">
      <div class="row">
        <img v-if="image" v-bind:src="image" />
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
            <label for="categorie_id">Categorie</label>
            <select name="categorie_id" id="categorie_id" v-model="category_id">
              <option value="0">--</option>
              <option v-for="(category,index) in categories" :value="category.id">{{category.name}}</option>
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
        <div class="col-12">
          <div class="form-group">
            <label for="credit" style="display:inline">Arabic</label>
            <input
              type="checkbox"
              name="is_arabic"
              id="is_arabic"
              v-model="is_arabic"
              style="width: 50px"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>HTML</label>
          <vue-editor v-model="html"></vue-editor>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <button type="submit" size="sm" color="success">
        <i class="fa fa-dot-circle-o"></i> Sauvegarder
      </button>
      <button type="reset" size="sm" color="danger" @click="draft">
        <i class="fa fa-ban"></i> Draft
      </button>
    </div>
  </form>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  async mounted() {
    let { data } = await axios.get("/categories");
    this.categories = data;
  },
  components: {
    VueEditor
  },
  data() {
    return {
      errors: [],
      categories: [],
      title: "Title",
      description: "Description",
      category_id: 0,
      slug: "slug",
      credit: "credit",
      is_featured: 0,
      is_arabic: 0,
      html: "<p>Html</p>",
      image: null,
      largeImage: null
    };
  },
  methods: {
    checkForm(e) {
      e.preventDefault();

      this.errors = [];

      if (!this.title || !this.description || !this.slug || !this.html) {
        this.errors.push("Name required.");
      }
      if (this.category_id == 0) this.errors.push("Enter category");
      if (this.errors.length != 0) return alert(this.errors[0]);
      const data = {
        title: this.title,
        description: this.description,
        category_id: this.category_id,
        slug: this.slug,
        credit: this.credit,
        is_featured: this.is_featured,
        html: this.html,
        image: this.image,
        largeImage: this.largeImage,
        user_id: 1,
        is_draft: 0,
        is_arabic: this.is_arabic
      };

      axios
        .post("/posts", data)
        .then(function(response) {
          console.log(response);
          window.location.href =
            response.data.category_name + "/" + response.data.slug;
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
    },
    draft(e) {
      e.preventDefault();

      this.errors = [];

      if (!this.title || !this.title || !this.title || !this.title) {
        this.errors.push("Name required.");
      }
      const data = {
        title: this.title,
        description: this.description,
        category_id: this.category_id,
        slug: this.slug,
        credit: this.credit,
        is_featured: this.is_featured,
        html: this.html,
        image: this.image,
        largeImage: this.largeImage,
        user_id: 1,
        is_draft: 1
      };

      axios
        .post("/posts", data)
        .then(function(response) {
          window.location.href =
            response.data.category_name + "/" + response.data.slug;
        })
        .catch(function(error) {
          alert(error.message);
        });
    }
  }
};
</script>

<style lang="scss">
form {
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  img {
    width: 300px;
    height: 250px;
    margin: 0 auto;
  }
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: red;
    }
  }
  textarea {
    height: 350px;
    width: 100%;
  }
  button,
  input[type="submit"] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  input[type="radio"] {
    width: auto;
  }
  fieldset {
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: "";
      display: block;
      background-image: linear-gradient(
        to right,
        #ff3019 0%,
        #e2b04a 50%,
        #ff3019 100%
      );
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: true 0.5s linear infinite;
    }
  }
}
</style>