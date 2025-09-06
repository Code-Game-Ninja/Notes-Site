#include<graphics.h>
#include<conio.h>
#include<dos.h>

int main(){

	 int gd = DETECT, gm = 0;
	 initgraph(&gd, &gm, "C:\\MUSIC\\TC\\BGI");
	 int x1=70, x2=410, d=0;

	 while(!kbhit()){
		if(d<140){
			circle(x1+d, 240, 30);
			circle(x2-d, 240, 30);
			d++;
			delay(10);
			cleardevice();

		}
		else{
			while(d!=0){
				circle(x1+d, 240, 30);
				circle(x2-d, 240, 30);
				d--;
				delay(10);
				cleardevice();

			}
		}
	 }

	 getch();
	 closegraph();
	 return 0;
}