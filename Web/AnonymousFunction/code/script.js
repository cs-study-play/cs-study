// 일반적인 함수 실행
function func_normal() {
    console.log("일반 함수 실행");
};
func_normal();


// 익명함수 실행1
const func_af = function () {
    console.log("익명함수 실행1");
};
func_af();


// 익명함수 실행2
(function () {
    console.log("익명함수 실행2");
})();



// 화살표함수 실행1
const func_arrow = () => {
    console.log("화살표 함수 실행1");
}
func_arrow();


// 화살표함수 실행2
(() => {
    console.log("화살표 함수 실행2");
})();



func_normal2();

function func_normal2() {
    console.log("일반 함수 실행222");
};




// func_af2();

// const func_af2 = function () {
//     console.log("익명함수 실행222");
// };


const func_af22 = function () {
    console.log("익명함수 실행222");
};

func_af22();
func_af22();
