<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big">Contact us</h1>
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />

            <form @submit.prevent="submit" action="#" class="mt-5">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    id="name-input"
                    v-model="v$.name.$model"
                  />
                  <span v-for="error in v$.name.$errors" :key="error.$uid">{{
                    error.$message
                  }}</span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    type="email"
                    class="form-control"
                    id="email-input"
                    v-model="v$.email.$model"
                  />
                  <span v-for="error in v$.email.$errors" :key="error.$uid">{{
                    error.$message
                  }}</span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0"> Phone </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    type="tel"
                    class="form-control"
                    id="phone-input"
                    v-model="phone"
                  />
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-start">
                  <label for="pmessage" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea
                    v-model="v$.message.$model"
                    class="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Leave your comments here"
                  ></textarea>
                  <span v-for="error in v$.message.$errors" :key="error.$uid">{{
                    error.$message
                  }}</span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-9 d-flex align-items-start">
                  <label for="consent-input" class="mb-0"
                    >Consent to the processing of personal data</label
                  >
                </div>
                <div class="col col-12 col-sm-3">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="consent-input"
                    v-model="v$.consent.$model"
                    checked
                  />
                </div>
              </div>
              <span v-for="error in v$.consent.$errors" :key="error.$uid">{{
                error.$message
              }}</span>
              <div class="row">
                <div class="col">
                  <button class="btn btn-outline-dark send-btn">Send us</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, maxLength } from "@vuelidate/validators";
import { helpers } from "@vuelidate/validators";
import { minLength } from "../validators/minLength";
import { consentCheck } from "../validators/consentCheck";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: "true",
    };
  },
  components: {
    NavBarComponent,
  },
  validations() {
    return {
      name: { required },
      email: { required, email },
      phone: {},
      message: {
        required,
        maxLength: maxLength(20),
        minLength: helpers.withMessage(" this value min 5", minLength),
      },
      consent: {
        required,
        consentCheck: helpers.withMessage(" this not checked", consentCheck),
      },
    };
  },

  methods: {
    async submit() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      console.log({
        name: this.name,
        phone: this.phone,
        email: this.email,
        message: this.message,
        consent: this.consent,
      });
    },
  },
};
</script>