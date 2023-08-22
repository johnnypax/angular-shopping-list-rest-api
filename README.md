# Shopping List Project with Angular

The Shopping List project is a simple Angular application that allows users to manage their shopping list by adding, updating, and deleting items.

Click on [Archety.dev](https://archety.dev/angular) for more code.

# REQUIREMENT:

This simple Front-End in Angular uses another project as a Back-End in NodeJS and MySQL, you can find it by [CLICKING HERE](https://github.com/johnnypax/node-express-crud-shopping-list)


## Table of Contents

1. Installation and Setup
2. Project Structure
3. Key Features
4. Bootstrap Integration

## 1. Installation and Setup

To get started, ensure you have Node.js and npm installed. After that, you can install the Angular CLI globally with:

```bash
npm install -g @angular/cli
```

Once the Angular CLI is installed, clone the repository and navigate to the project directory:

```bash
git clone [REPOSITORY_URL]
cd project_name
```

Install the project dependencies with:

```bash
npm install
```

Start the development server with:

```bash
ng serve
```

The application should now be accessible at http://localhost:4200/.


## 2. Project Structure

The project is structured into several main components:

- **ShoppingList Component**: Displays and manages the list of items.
- **AddItem Component**: Provides a form for users to add new items to the list.
- **EditItem Component**: Allows for updating existing items in the list.
- **ShoppingList Service**: Manages CRUD operations by communicating with the backend API.

## 3. Key Features

- **List Display**: View all the items on your shopping list.
- **Item Addition**: A simple form lets users add new items specifying both the name and quantity.
- **Item Editing**: Click on an item to be redirected to an editing page, where item details can be updated.
- **Item Deletion**: Remove items from the list after a confirmation prompt to ensure no accidental deletions.

## 4. Bootstrap Integration

Bootstrap is used in this project to provide a polished appearance and responsive layout:

1. Bootstrap was installed via npm.
2. Integration of Bootstrap's CSS into the `angular.json` file.
4. Throughout the project templates, Bootstrap classes were used to style and organize content.

# Disclaimer

The code provided in this repository is offered "as-is" and without any warranties or guarantees of fitness for a specific purpose. While efforts have been made to ensure accuracy and functionality, it is important to acknowledge the following points before utilizing the code:

No Warranty: The code is provided without warranty of any kind, either expressed or implied, including but not limited to, the implied warranties of merchantability and fitness for a particular purpose. The entire risk as to the quality and performance of the code is with the user.

Use at Your Own Risk: The code has been created to demonstrate a specific concept or functionality. It may not be suitable for all environments or applications. Users are advised to thoroughly review, test, and customize the code to meet their own requirements and standards.

No Support: The authors and contributors of the code may not be available for support or assistance. While efforts may be made to address issues or questions, there is no guarantee of timely response or resolution.

Liability Limitation: In no event shall the authors or contributors be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this code, even if advised of the possibility of such damage.

Security Considerations: It is the responsibility of the user to assess and implement appropriate security measures when using or deploying the code. Code from external sources should be reviewed for potential vulnerabilities before being integrated into production systems.

By using the code provided in this repository, you acknowledge that you have read, understood, and agreed to these terms. You are encouraged to exercise caution and due diligence in your utilization of the code for your specific purposes.