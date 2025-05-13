import { AfterViewInit, Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
    ngOnInit(): void {

    }

    // ngAfterViewInit(): void {
    //     const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    //     const ctx = canvas.getContext('2d')!;

    //     const dino = { x: 50, y: 110, width: 30, height: 30, vy: 0, gravity: 2, jumping: false };
    //     const cactus = { x: 600, width: 20, height: 40 };
    //     let score = 0;

    //     function drawDino() {
    //         ctx.fillStyle = "#1976d2";
    //         ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
    //     }

    //     function drawCactus() {
    //         ctx.fillStyle = "#333";
    //         ctx.fillRect(cactus.x, 120, cactus.width, cactus.height);
    //     }

    //     function detectCollision() {
    //         return cactus.x < dino.x + dino.width &&
    //             cactus.x + cactus.width > dino.x &&
    //             dino.y + dino.height >= 120;
    //     }

    //     function jump() {
    //         if (!dino.jumping) {
    //             dino.vy = -25;
    //             dino.jumping = true;
    //         }
    //     }

    //     document.addEventListener('keydown', (e) => {
    //         if (e.code === 'Space') jump();
    //     });

    //     document.addEventListener('touchstart', () => jump());

    //     function update() {
    //         ctx.clearRect(0, 0, canvas.width, canvas.height);
    //         dino.y += dino.vy;
    //         dino.vy += dino.gravity;

    //         if (dino.y >= 110) {
    //             dino.y = 110;
    //             dino.vy = 0;
    //             dino.jumping = false;
    //         }

    //         cactus.x -= 10;
    //         if (cactus.x < -cactus.width) {
    //             cactus.x = 600 + Math.random() * 200;
    //             score++;
    //         }

    //         drawDino();
    //         drawCactus();

    //         if (detectCollision()) {
    //             //alert("Game Over! Your Score: " + score);
    //             // document.location.reload();/
    //         }

    //         requestAnimationFrame(update);
    //     }

    //     update();
    // }
}