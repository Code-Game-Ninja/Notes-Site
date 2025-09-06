#include<stdio.h>
#include<graphics.h>
#include<stdlib.h>

void translation(int x1, int y1, int x2, int y2);
void compTranslation(int x1, int y1, int x2, int y2);
// +

int main(){
	 int gd = DETECT, gm = 0;
	 initgraph(&gd, &gm, "C:\\MUSIC\\TC\\BGI");
	 int x1,y1,x2,y2;
	 int choice;
	 printf("Enter the left top(x1,y1) and right bottom (x2,y2) coordinates of ractangle\n");
	 scanf("%d%d%d%d",&x1,&y1,&x2,&y2);
	 rectangle(x1,y1,x2,y2);
L1:	 printf("Enter the choice:\n"
		"0 - for exit\n"
		"1 - for translation\n"
		"2 - for Composite Translation\n");
	 scanf("%d", &choice);
	 switch(choice){
		case 0: exit(0);
		case 1: translation(x1, y1, x2, y2);
			goto L1;
		case 2: compTranslation(x1, y1, x2, y2);
			goto L1;
		default: printf("Enter right choice!\n");
			goto L1;
	 }
}

void translation(int x1, int y1, int x2, int y2){
	int tx,ty;
	printf("Enter the translation factors tx and ty\n");
	scanf("%d%d",&tx,&ty);
	rectangle(x1+tx, y1+ty, x2+tx, y2+ty);
	getchar();
}

void compTranslation(int x1, int y1, int x2, int y2){
	int tx1,ty1,tx2,ty2;
	printf("Enter the translation factors tx and ty for first and second translation\n");
	scanf("%d%d%d%d",&tx1,&ty1,&tx2,&ty2);
	rectangle(x1+tx1+tx2, y1+ty1+ty2, x2+tx1+tx2, y2+ty1+ty2);
	getchar();
}
