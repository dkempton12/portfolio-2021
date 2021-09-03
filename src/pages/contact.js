import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

import MainHeading from "../components/MainHeading/MainHeading"
import TextBlock from "../components/TextBlock/TextBlock"
import Form from "../components/Form/Form"
import FormField from "../components/Form/FormFields/FormField"
import Input from "../components/Form/FormFields/Input/Input"

const Contact = () => (
  <Layout>
    <Seo title="Contact Me" />
    <MainHeading title="Contact Me" align="left" />
    <Form>
      <FormField>
        <Input type="text" id="name" name="name" />
      </FormField>

      <FormField>
        <Input type="email" id="email" name="email" />
      </FormField>
    </Form>
  </Layout>
)

export default Contact
