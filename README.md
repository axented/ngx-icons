# ngx-icons

 A collection of icons libraries to use in your Angular apps

 ## Install

 ```shell
 $ npm install --save  ngx-icons
 ```

**Supported Libraries**

The following icon libraries are supported

* [Font Awesome](http://fontawesome.io/icons/)
* [Themify Icons](https://themify.me/themify-icons)
* [Weather Icons](https://erikflowers.github.io/weather-icons/)

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
rotate    | `Number / String`  | `90 / 180 / 270` / `horizontal / vertical`  | Yes
inverse   | `Boolean`          | `true / false`                            | Yes
qoute     | `String`           | `left / right`                            | Yes
pull      | `String`           | `left / right`                            | Yes

 # Use Themify Icons

 **Install**

 Download icons from [Themify](https://themify.me/themify-icons) the add the ‘themify-icons.css’ file and ‘fonts’ to folder.

**Import the module**
```typescript
//...
import { ThemifyIcons } from 'ngx-icons';
@NgModule({
  //...
  imports: [
    //...
    ThemifyIcons
  ],
  //...
})
export class AppModule { }
```

**If you're using [Angular CLI](https://github.com/angular/angular-cli), add  CSS to `styles` inside the `.angular-cli.json`**
```json
"styles": [
    "styles.css",
    "../path/to/themify-icons.css"
],
```

# Usage and Options
To use the component use selector: `<ti></ti>`.


Name      | Type               | Options                                   | Optional
---       | ---                | ---                                       | ---
name      | `String`           | [Themnify Icons](https://themify.me/themify-icons) | No


 # Use Weather Icons

 **Install**

 ```shell
 $ npm install --save  weather-icons
 ```

**Import the module**
```typescript
//...
import { WeatherIconsModule } from 'ngx-icons';
@NgModule({
  //...
  imports: [
    //...
    WeatherIcons
  ],
  //...
})
export class AppModule { }
```

**If you're using [Angular CLI](https://github.com/angular/angular-cli), add  CSS to `styles` inside the `.angular-cli.json`.**
```json
"styles": [
    "styles.css",
    "../node_modules/weather-icons/css/weather-icons.css",
    "../node_modules/weather-icons/css/weather-icons-wind.css"
],
```
Note that `weather-icons-wind.css` is only needed for wind direction icons.

# Usage and Options
To use the component use selector: `<wi></wi>`.

Name      | Type               | Options                                   | Optional
---       | ---                | ---                                       | ---
name      | `String`           | [W-I Icons](https://erikflowers.github.io/weather-icons/) | No
size      | `String`           | `lg, 2x, 3x, 4x, 5x`                      | Yes
fixed     | `Boolean`          | `true / false`                            | Yes
rotate    | `Number / String`  | `90 / 180 / 270` / `horizontal / vertical`  | Yes
direction   | `String`          | `towards / from`                            | Yes, only for name `wind`
degree     | `Number / String`           | `0-360 / n-nnw`                             | Yes, only for name `wind`
beufort      | `Number`           | `0-11`                            | Yes, only for name `wind-beufort`