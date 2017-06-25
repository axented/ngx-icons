# ngx-icons

 A collection of icons libraries to use in your Angular apps

 ## Install

 ```shell
 $ npm install --save  ngx-icons
 ```

**Supported Libraries**

The following icon libraries are supported

* Font Awesome

 # Use Font Awesome

 **Install**

 ```shell
 $ npm install --save  font-awesome
 ```

**Import the module**
```typescript
//...
import { FontAwesomeModule } from 'ngx-icons';
@NgModule({
  //...
  imports: [
    //...
    FontAwesomeModule
  ],
  //...
})
export class AppModule { }
```

**If you're using [Angular CLI](https://github.com/angular/angular-cli), add  CSS to `styles` inside the `.angular-cli.json`**
```json
"styles": [
    "styles.css",
    "../node_modules/font-awesome/css/font-awesome.css"
],
```

# Usage and Options
To use the component use selector: `<fa></fa>`.

Name      | Type               | Options                                   | Optional
---       | ---                | ---                                       | ---
name      | `String`           | [F-A Icons](http://fontawesome.io/icons/) | No
size      | `String`           | `lg, 2x, 3x, 4x, 5x`                      | Yes
fixed     | `Boolean`          | `true / false`                            | Yes
animation | `String`           | `spin / pulse`                            | Yes
rotate    | `Number / String`  | `90 / 180 / 270` `horizontal / vertical`  | Yes
inverse   | `Boolean`          | `true / false`                            | Yes
qoute     | `String`           | `left / right`                            | Yes
pull      | `String`           | `left / right`                            | Yes