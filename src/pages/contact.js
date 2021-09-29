import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

import MainHeading from "../components/MainHeading/MainHeading"
import TextBlock from "../components/TextBlock/TextBlock"
import Form from "../components/Form/Form"
import FormField from "../components/Form/FormFields/FormField"
import Label from "../components/Form/FormFields/Label/Label"
import Input from "../components/Form/FormFields/Input/Input"

const Contact = () => (
  <Layout>
    <Seo title="Contact Me" />
    <MainHeading title="Contact Me" align="left" />
    <Form>
      <FormField>
        <Label labelText="Your Name" htmlFor="name" />
        <Input type="text" id="name" name="name" />
      </FormField>

      <FormField>
        <Label labelText="Your E-mail" htmlFor="email" />
        <Input type="email" id="email" name="email" />
      </FormField>
    </Form>
  </Layout>
)

export default Contact
