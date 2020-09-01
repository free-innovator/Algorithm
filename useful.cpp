/* 메모리 공유 통신 */
#include <sys/mman.h>

int main(void)
{
    char *p = (char *)mmap(0, 45000045, PROT_READ, MAP_SHARED, 0, 0);
}