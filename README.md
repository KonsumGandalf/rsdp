# Regensburg Student Progress Dashboard

A tool to automate scanning & monitoring websites & applications for several health topics, such as security,
performance and uptime.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#objectives">Objectives</a></li>
      </ul>
    </li>
    <li>
      <a href="#understand-this-workspace">Understand this workspace</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#start-the-platform">Start the platform</a></li>
      </ul>
    </li>
    <li>
      <a href="#apps">Apps</a>
      <a href="#domains">Domains</a>
      <ul>
        <li>
            <a href="#grade">Grade</a>
            <ul>
                <li><a href="#backend">Backend</a></li>
            </ul>
        </li>
        <li>
            <a href="#Shared">Shared</a>
            <ul>
                <li><a href="#backend">Backend</a></li>
            </ul>
        </li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

# About The Project

This project was developed as part of my bachelor thesis at the [OTH Regensburg](https://www.oth-regensburg.de/).

## Introduction

Gamification is a popular approach to motivate and engage users in various contexts,
including education. In this Bachelor thesis, I explore the potential of gamification in
higher education and present a complementary learning platform designed and implemented
to improve student engagement and performance understanding.

## Objectives

The main objectives of this project are:

-   To explore the theoretical foundations of gamification in education
-   To design and develop a complementary learning platform that incorporates gamification elements and mechanics

# Understand this workspace

This tool is built within a Nx workspace and employs Angular for the frontend,
NestJS for the backend, and PostgresSQL as the database.
The database is configured to run inside a docker container by default.

## Installation

_Below is an example of how you can instruct your audience on installing and
setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo

```sh
git clone https://github.com/KonsumGandalf/rsdp
```

2. Install NPM packages

```shell
npm install
```

## Start the platform

1. start the database

```shell
docker compose up
```

2. start the backend

```shell
nx serve backend
```

3. start the frontend

```shell
nx serve frontend
```

# Apps

| Name      | Path                         | Description                 |
| --------- | ---------------------------- | --------------------------- |
| `backend` | [apps/backend](apps/backend) | The backend of the platform |

# Domains

## Challenge Management

### Backend

| Name                                                | Path                                                                                                             | Description                                               |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `challenge-management-backend-challenge-management` | [libs/challenge-management/backend/challenge-management](libs/challenge-management/backend/challenge-management) | Allows tutors the update and create challenges            |
| `challenge-management-backend-common-models`        | [libs/challenge-management/backend/common-models](libs/challenge-management/backend/common-models)               | Challenge-management-related data models for the backend. |
| `challenge-management-backend-semester-management`  | [libs/challenge-management/backend/semester-management](libs/challenge-management/backend/semester-management)   | Allows to set the start and end of a semester.            |

## Moodle Management

### Backend

| Name                                               | Path                                                                                                           | Description                                                                       |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `moodle-management-backend-moodle-management`      | [libs/moodle-management/backend/moodle-management](libs/moodle-management/backend/moodle-management)           | Provides a set of commands and utilities for interacting with the Moodle platform |
| `moodle-management-backend-moodle-request-handler` | [libs/moodle-management/backend/moodle-request-handler](libs/moodle-management/backend/moodle-request-handler) | Acting as a middleware for calling the moodle backend api.                        |

## Shared

### Backend

| Name                        | Path                                                           | Description                                               |
| --------------------------- | -------------------------------------------------------------- | --------------------------------------------------------- |
| `shared-backend-test-utils` | [libs/shared/backend/test-util](libs/shared/backend/test-util) | Helps to test services for isolated DB interactions.      |
| `shared-backend-utils`      | [libs/shared/backend/utils](libs/shared/backend/utils)         | Reusable utility library for common models and functions. |

### Frontend

| Name                             | Path                                                                       | Description                                                                                                  |
| -------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `shared-frontend-assets`         | [libs/shared/frontend/assets](libs/shared/frontend/assets)                 | Collection of reusable assets for frontend development                                                       |
| `shared-frontend-environment`    | [libs/shared/frontend/environment](libs/shared/frontend/environment)       | Configurations, and settings related to the frontend environment setup.                                      |
| `shared-frontend-storybook-host` | [libs/shared/frontend/storybook-host](libs/shared/frontend/storybook-host) | Host all shared UI components for Storybook.                                                                 |
| `shared-frontend-ui-atoms`       | [libs/shared/frontend/ui/atoms](libs/shared/frontend/ui/atoms)             | collection of atomic UI components that are designed to be highly reusable and independent.                  |
| `shared-frontend-ui-organisms`   | [libs/shared/frontend/ui/organisms](libs/shared/frontend/ui/organisms)     | Collection of reusable UI components that represent complex and interconnected elements of a user interface. |

## Student-Submissions

### Backend

| Name                                               | Path                                                                                                             | Description                                                      |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `student-submission-backend-common-models`         | [libs\student-submissions\backend\common-models](libs\student-submissions\backend\common-models)                 | Student-submission-related data models for the backend.          |
| `student-submission-backend-github-submissions`    | [libs\student-submissions\backend\github-submissions](libs\student-submissions\backend\github-submissions)       | GitHub submission handling for student submissions.              |
| `student-submission-backend-moodle-submissions`    | [libs\student-submissions\backend\moodle-submissions](libs\student-submissions\backend\moodle-submissions)       | Moodle submission handling for student submissions.              |
| `student-submission-backend-submission-insights`   | [libs\student-submissions\backend\submission-insights](libs\student-submissions\backend\submission-insights)     | Allows the frontend to request the state of student submissions. |
| `student-submission-backend-submission-management` | [libs\student-submissions\backend\submission-management](libs\student-submissions\backend\submission-management) | Manages student submissions.                                     |

### Common

| Name                               | Path                                                                             | Description                                                                  |
| ---------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `student-submission-common-models` | [libs\student-submissions\common\models](libs\student-submissions\common\models) | Common models used in the student submission domain by the front and backend |

## User

### Backend

| Name                                | Path                                                                             | Description                                                                                        |
| ----------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `user-backend-common-models`        | [libs/user/backend/common-models](libs/user/backend/common-models)               | User-related data models for the backend.                                                          |
| `user-backend-github-authorization` | [libs/user/backend/github-authorization](libs/user/backend/github-authorization) | Handles GitHub authorization and saves an access token for a user.                                 |
| `user-backend-user-authentication`  | [libs/user/backend/user-authentication](libs/user/backend/user-authentication)   | It provides user authentication functionality for a backend application.                           |
| `user-backend-user-mail-management` | [libs/user/backend/user-mail-management](libs/user/backend/user-mail-management) | Manages email confirmation and access control.                                                     |
| `user-backend-user-management`      | [libs/user/backend/user-management](libs/user/backend/user-management)           | Provides authentication and authorization functionalities for user management in a backend system. |

### Frontend

| Name                                | Path                                                                             | Description                                                                         |
| ----------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `user-frontend-auth`                | [libs/user/frontend/auth](libs/user/frontend/auth)                               | Utilities for managing the current user's authentication status.                    |
| `user-frontend-domain`              | [libs/user/frontend/domain](libs/user/frontend/domain)                           | Utilities and abstractions for interacting with API repository.                     |
| `user-frontend-identity-management` | [libs/user/frontend/identity-management](libs/user/frontend/identity-management) | Utilities for managing user identities and authentication in frontend applications. |
| `user-frontend-user-shell`          | [libs/user/frontend/user-shell](libs/user/frontend/user-shell)                   | Provides a shell for building user-facing frontend applications.                    |

<!-- CONTACT -->

## Contact

David Schmidt - [Instagram]: @[\_life_of_david](https://www.instagram.com/_life_of_david/)

David Schmidt - [LinkedIn]: @[David Schmidt](https://www.linkedin.com/in/david-schmidt-09b69b1b6)

Project Link: [Regensburg Student Progress Dashboard](https://github.com/users/KonsumGandalf/projects/8)

<p align="right">(<a href="#top">back to top</a>)</p>

## Resources

-   Nx Workspace: https://nx.dev/getting-started/intro
-   NestJS: https://nestjs.com/

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

I would like to express my sincere gratitude to
Professor [Prof. Dr. Markus Heckner](https://www.linkedin.com/in/mheckner) and his scientific
employee [Julia Ruhland](https://www.xing.com/profile/Julia_Ruhland6) for
their invaluable support and guidance throughout this project.

<p align="right">(<a href="#top">back to top</a>)</p>
