use std::fmt::Debug;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

pub fn console_log(string: &str) {
    log(string);
}

pub fn console_log_any<T: Debug>(string: &T) {
    log(format!("{:?}", string).as_str());
}
