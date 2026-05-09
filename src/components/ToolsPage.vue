<template>
    <div class="banner">
        <div class="slider" style="--quantity: 10">
            <div class="item" style="--position: 1"> <img src="../assets/images/javascript.png" alt=""></div>
            <div class="item" style="--position: 2"> <img src="../assets/images/cpp.png" alt=""></div>
            <div class="item" style="--position: 3"> <img src="../assets/images/aws.png" alt=""></div>
            <div class="item" style="--position: 4"> <img src="../assets/images/css.png" alt=""></div>
            <div class="item" style="--position: 5"> <img src="../assets/images/git.png" alt=""></div>
            <div class="item" style="--position: 6"> <img src="../assets/images/docker.png" alt=""></div>
            <div class="item" style="--position: 7"> <img src="../assets/images/k8s.png" alt=""></div>
            <div class="item" style="--position: 8"> <img src="../assets/images/mongodb.png" alt=""></div>
            <div class="item" style="--position: 9"> <img src="../assets/images/fastapi.png" alt=""></div>
            <div class="item" style="--position: 10"> <img src="../assets/images/vuejs.png" alt=""></div>

        </div>
    </div>
</template>

<style scoped>
.banner {
    width: 100%;
    height: 100vh;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.banner .slider {
    position: absolute;
    width: 200px;
    height: 250px;
    top: 20%;
    left: calc(50% - 100px);
    transform-style: preserve-3d;
    transform: perspective(1000px);
    animation: autoRun 20s linear infinite;
}

@keyframes autoRun {
    0% {
        transform: perspective(1000px) rotateY(0deg);
    }
    100% {
        transform: perspective(1000px) rotateY(360deg);
    }
}

.banner .slider .item {
   position: absolute;
   inset: 0 0 0 0;
   transform: 
    rotateY(calc( (var(--position) - 1) * (360deg / var(--quantity))))
    translateZ(350px);
}

.banner .slider .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 10px rgb(134, 233, 3);
    
}

</style>