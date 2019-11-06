<template>
  <form @submit="checkForm" method="post">
    <div class="card-body">
      <div class="row">
        <img v-if="post.image" v-bind:src="post.image" />
        <div class="col-12">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" v-model="post.title" />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="description">Description</label>
            <input type="text" name="description" id="description" v-model="post.description" />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="categorie">Categorie</label>
            <select name="categorie" id="categorie" v-model="post.categorie">
              <option>--</option>
              <option value="javascript">Javascript</option>
              <option value="healthy">Healthy</option>
              <option value="mortgage">Mortgage</option>
            </select>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="slug">Slug</label>
            <input type="text" name="slug" id="slug" v-model="post.slug" />
          </div>
        </div>

        <div class="col-12">
          <div class="form-group">
            <label for="is_featured">is Featured</label>
            <select name="is_featured" id="is_featured" v-model="post.is_featured">
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
            <input type="text" name="credit" id="credit" v-model="post.credit" />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="draft">Draft</label>
            <select name="draft" id="draft" v-model="post.is_draft">
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>HTML</label>
          <vue-editor v-model="post.html"></vue-editor>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <button type="submit" size="sm" color="success">Update</button>
    </div>
  </form>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  props: ["myPost"],
  components: {
    VueEditor
  },
  data() {
    return {
      errors: [],
      post: this.myPost,
      content: "<h1>Hy</h1>"
    };
  },
  methods: {
    checkForm(e) {
      e.preventDefault();

      this.errors = [];

      if (
        !this.post.title ||
        !this.post.description ||
        !this.post.categorie ||
        !this.post.slug
      ) {
        this.errors.push("Name required.");
      }
      if (this.errors.length != 0) return alert("Check errors");
      const data = {
        title: this.post.title,
        description: this.post.description,
        categorie: this.post.categorie,
        slug: this.post.slug,
        credit: this.post.credit,
        is_featured: this.post.is_featured,
        is_draft: this.post.is_draft,
        html: this.post.html,
        image: this.post.image,
        largeImage: this.post.largeImage,
        user_id: "admin"
      };

      axios
        .put(`/posts/${this.post.id}`, data)
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

      this.post.image = file.secure_url;
      this.post.largeImage = file.eager[0].secure_url;
    }
  },
  watch: {
    post: {
      handler() {},
      deep: true
    }
  },
  mounted: function() {}
};
</script>

<style lang="scss">
@import "~vue2-editor/dist/vue2-editor.css";

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
    cursor: pointer;
    &:disabled {
      background: #e2b04a;
    }
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