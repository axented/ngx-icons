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
 $ npm install --save  git+https://github.com/erikflowers/weather-icons.git
 ```
 Note that `npm install --save weather-icons` installs legacy version 1.5

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
Note that if you do not require the wind direction icons you can drop `weather-icons-wind.css`.

# Usage and Options
To use the component use selector: `<wi></wi>`.

Name      | Type               | Options                                   | Optional
---       | ---                | ---                                       | ---
name      | `String`           | [W-I Icons](https://erikflowers.github.io/weather-icons/) | No
fixed     | `Boolean`          | `true / false`                            | Yes
rotate    | `Number`           | `90 / 180 / 270`                          | Yes
flip      | `String`           | `horizontal / vertical`                   | Yes
direction | `String`           | `towards / from`                          | Yes, only for `wind` default `towards`
degree    | `Number`           | `0-360`                                   | Yes, only for `wind` default `0`
cardinal  | `String`           | `n - nnw`                                 | Yes, only for `wind` default `n`
beufort   | `Number`           | `0-11`                                    | Yes, only for `wind-beufort` default `0`
time      | `Number`           | `1-12`                                    | Yes, only for `time` default 1

**Examples:**
* `<wi name="wind" direction="from" degree="78"></wi>`
* `<wi name="sleet" fixed="true"></wi>`
* `<wi name="time" time="7"></wi>`
* `<wi name="raindrop" flip="vertical"></wi>`
* `<wi name="fire" rotate="90"></wi>`