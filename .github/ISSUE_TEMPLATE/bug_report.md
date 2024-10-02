---
name: Bug report
about: Create a report to help us improve
title: ''
labels: ''
assignees: ''

---

name: Bug Report 🐞
description: File a bug report.
title: "[Bug]: "
labels: ["bug", "triage"]
assignees:
  - jeevan10017
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to file a bug report! Please provide as much information as possible to help us resolve the issue.
  - type: input
    id: existing-issue
    attributes:
      label: Is there an existing issue for this?
      description: Please search to see if an issue already exists for the bug you encountered.
      placeholder: I have searched the existing issues
    validations:
      required: true
  - type: textarea
    id: bug-description
    attributes:
      label: Describe the bug
      description: A concise description of what you are experiencing.
      placeholder: Tell us what you see!
    validations:
      required: true
  - type: textarea
    id: expected-behavior
    attributes:
      label: Expected behavior
      description: A clear and concise description of what you expected to happen.
      placeholder: What did you expect to happen?
    validations:
      required: true
  - type: file
    id: screenshots
    attributes:
      label: Add Screenshots
      description: Please upload sufficient screenshots to help explain your issue.
      multiple: true
  - type: input
    id: device
    attributes:
      label: On which device are you experiencing this bug?
      placeholder: e.g., Desktop, iPhone, Android
    validations:
      required: false
  - type: checkboxes
    id: contributor-info
    attributes:
      label: Contributor Information
      options:
        - label: I am a GSSOC-EXT contributor
        - label: I am a HACTOBERFEST
 contributor
        - label: I have starred the repository *
          required: true
  - type: checkboxes
    id: terms
    attributes:
      label: Acknowledgement
      options:
        - label: I have read the Contributing Guidelines *
          required: true
