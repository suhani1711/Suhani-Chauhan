#include <bits/stdc++.h>
using namespace std;

class Stack
{
public:
    vector<char> item;
    int top;

    Stack(int size)
    {
        item.resize(size);
        top = -1;
    }

    void Push(char x)
    {
        if (top == item.size() - 1)
        {
            cout << "Stack Overflow" << endl;
            return;
        }

        top++;
        item[top] = x;
    }

    char Pop()
    {
        if (top == -1)
        {
            cout << "Stack Underflow" << endl;
            return '\0';
        }

        char x = item[top];
        top--;
        return x;
    }

    char StackTop()
    {
        if (top == -1)
        {
            cout << "Stack is Empty" << endl;
            return '\0';
        }

        return item[top];
    }

    bool IsEmpty()
    {
        return (top == -1);
    }
};

int main()
{
    Stack S(6);

    S.Push('a');
    S.Push('b');
    S.Push('c');
    S.Push('d');

    cout << S.Pop() << endl;
    cout << S.StackTop() << endl;
    cout << S.Pop() << endl;

    S.Push('e');

    cout << S.StackTop() << endl;
    cout << S.Pop() << endl;
    cout << S.Pop() << endl;
    cout << S.Pop() << endl;
    cout << S.Pop() << endl;

    return 0;
}