import Loader from 'react-loaders'
import './index.scss'
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Learn = () => {


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone bg-gray-500 grid place-items-center h-screen">
          <h1>Hello , Here You can learn DevOps</h1>
          <h3>Use Split Screen Mode Or Ctrl + Zooming for better scrolling and reading experience from your browser</h3>
          <h2>Step-1 : Linux</h2>
          <h2> Basics of Linux:</h2>
          <h2>Kernel: It is the first program to load when a system is booted, interface between the user applications and the os.
            Responsible for managing processes using calls, queuing, operations and process management.<br></br><br></br>
            Shell:
            Environment in which the user can interact with the system.<br></br>
            -Execute commands<br></br>
            -Environment settings<br></br>
            -Variable assignment<br></br>
            -variable substitution<br></br>
            -filename generation<br></br>
            -i/o redirection<br></br>
            -pipelines<br></br><br></br>
            Process management :<br></br>
            In Linux all processes are related with a parent and child identity.<br></br>
            In Linux everything is either a file or a process.<br></br><br></br>
            CPU scheduling:<br></br>
            Linux uses round-robin scheduling to support the multi user and time sharing.<br></br>
            Round robin: oldest, simplest and most used algorithm.<br></br>
            *Linux commands are case sensitive. 99% are in the lower case.<br></br>
            *kernel maps everything to numbers, users refer to it by names.<br></br>
            *Linux is a kernel.<br></br><br></br>
            Two types of users:<br></br>
            1. Root user - control.<br></br>
            2. Normal user - created by root user. <br></br>
          </h2>

          <h2>We are gonna learn Linux as our first step</h2>
          <h2>Use linux machine Prefferably Rocky Linux OS: Rocky Linux 9.2 .
            VM: Oracle virtual box 7.2 . </h2>
          <h2>Here we will learn necessary commands required for cloud infrastructure management</h2>




          <p>Command 1: </p>
          <SyntaxHighlighter language="javascript" style={darcula}>
            whoami
          </SyntaxHighlighter>
          <p>gives which user is currently logged in to the shell</p>
          <br></br>




          <p>Command 2: </p>
          <SyntaxHighlighter language="javascript" style={darcula}>
            id
          </SyntaxHighlighter>
          <p>gives uid-user id and gid-group id and all other information </p>
          <br></br>




          <p>Command 3:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            useradd raj
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={darcula}>
            passwd raj
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={darcula}>
            id raj
          </SyntaxHighlighter>
          <p>O/P</p>
          <p>New user created.<br></br>Id of user Raj displayed and a group called Raj is created.</p>
          <p>Syntax :</p>
          <p>command -option(s) file</p>
          <p>Eg:</p>
          <p>ls : command to list.<br></br>
            ls -l : long listing. (Type of file, permission,...)<br></br>
            ls -l -r : reverse.<br></br>
            Argument: something on which the command works.<br></br>
            ls -l (filename).</p>
          <p>What does ls do?<br></br>
            ls --help : short help.<br></br>
            man ls: manual.<br></br>
            q : quit manual.</p>
          <p>Hiding a file:<br></br>
            Any file starting with a dot is a hidden file.<br></br>
            ls -a : shows hidden files.<br></br>
            touch .mvjce: creating a hidden file called mvjce.</p>
          <p>Password file:<br></br>
            stores user information.<br></br>
            Password command: used to change passwords.<br></br>
            Eg:<br></br>
            man passwd: takes you to the first page of the manual.<br></br>
            man 5 passwd: gives information about the file passwd.<br></br>
            man man : to check how to use the manual.<br></br>
            info ls: also for help. But not majorly used.<br></br>
            *Man gives the detailed information. Hence used majorly</p>
          <br></br>
          <p>Command 4:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            man date
          </SyntaxHighlighter>
          <p>The 'man date' command provides detailed information about the date command, including its options and usage. <br></br>
            It's a helpful resource for understanding how to use the date command effectively. <br></br>
          </p>

          <p>Command 5:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            cal
          </SyntaxHighlighter>
          <p>The 'cal' command is used to display a calendar for the current month. <br></br>
            It's a convenient way to quickly check the calendar without leaving the command line interface. <br></br>
          </p>

          <p>Command 6:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            pwd
          </SyntaxHighlighter>
          <p>The 'pwd' command displays the present working directory, showing the path of the current directory in the file system. <br></br>
          </p>

          <p>Command 7:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            cd
          </SyntaxHighlighter>
          <p>The 'cd' command is used for changing directories in the file system. <br></br>
            When used without arguments, it takes the user to their home directory. <br></br>
          </p>

          <p>Command 8:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            su
          </SyntaxHighlighter>
          <p>The 'su' command is used to switch users in a Linux environment. <br></br>
            By default, it switches to the root user, but it can be used to switch to other users by specifying their username. <br></br>
          </p>

          <p>Command 9:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            alias
          </SyntaxHighlighter>
          <p>The 'alias' command is used to create shortcuts or abbreviations for other commands in the shell. <br></br>
            It's a convenient way to customize the command line environment and improve productivity. <br></br>
          </p>

          <p>Command 10:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            echo
          </SyntaxHighlighter>
          <p>The 'echo' command is used to display text or variables in the terminal. <br></br>
            It's commonly used in shell scripts or for debugging purposes to print messages to the user. <br></br>
          </p>
          <p>Command 11:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            tty
          </SyntaxHighlighter>
          <p>The 'tty' command displays the file name of the terminal connected to the standard input. <br></br>
            It's useful for identifying the terminal device being used, especially in scripts or system administration tasks. <br></br>
          </p>

          <p>Command 12:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            ~
          </SyntaxHighlighter>
          <p>The tilde character '~' represents the user's home directory in Linux. <br></br>
            It's commonly used as a shortcut for referring to the home directory, especially in commands or file paths. <br></br>
          </p>

          <p>Command 13:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            echo $0
          </SyntaxHighlighter>
          <p>The 'echo $0' command displays the name of the shell or shell script being executed. <br></br>
            It's a way to identify the current shell environment, which can be useful for debugging or scripting purposes. <br></br>
          </p>

          <p>Command 14:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            bash
          </SyntaxHighlighter>
          <p>The 'bash' command is used to start a new instance of the Bash shell, the default shell in most Linux distributions. <br></br>
            Running 'bash' without any arguments launches a new interactive shell session. <br></br>
          </p>

          <p>Command 15:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            sh
          </SyntaxHighlighter>
          <p>The 'sh' command is used to start a new instance of the Bourne shell, an older Unix shell that's still compatible with many Linux systems. <br></br>
            It's less commonly used than Bash but can be useful for scripting or compatibility purposes. <br></br>
          </p>
          <p>Command 16:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            cd /tmp
          </SyntaxHighlighter>
          <p>The 'cd /tmp' command changes the current directory to the '/tmp' directory. <br></br>
            /tmp is a common directory used for temporary files in Unix-like operating systems. <br></br>
          </p>

          <p>Command 17:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            cd raj
          </SyntaxHighlighter>
          <p>The 'cd raj' command changes the current directory to a directory named 'raj' in the current working directory. <br></br>
            This is an example of changing to a directory using a relative path. <br></br>
          </p>

          <p>Command 18:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            cd ~
          </SyntaxHighlighter>
          <p>The 'cd ~' command changes the current directory to the user's home directory. <br></br>
            The tilde '~' represents the home directory, so 'cd ~' is equivalent to 'cd /home/username'. <br></br>
          </p>

          <p>Command 19:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            cd -
          </SyntaxHighlighter>
          <p>The 'cd -' command changes the current directory to the previous directory you were in. <br></br>
            It's a convenient way to toggle between two directories. <br></br>
          </p>

          <p>Command 20:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            cd .
          </SyntaxHighlighter>
          <p>The 'cd .' command doesn't change the current directory and is essentially a no-op. <br></br>
            It's provided for consistency and represents the current directory. <br></br>
          </p>

          <p>Command 21:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            cd ..
          </SyntaxHighlighter>
          <p>The 'cd ..' command changes the current directory to the parent directory of the current working directory. <br></br>
            It's a way to navigate up the directory tree. <br></br>
          </p>

          <p>Command 22:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            vim
          </SyntaxHighlighter>
          <p>The 'vim' command launches the Vim text editor, a powerful and highly configurable editor available on most Unix-like systems. <br></br>
            Vim is known for its extensive feature set and modal editing capabilities. <br></br>
          </p>

          <p>Command 23:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            vimtutor
          </SyntaxHighlighter>
          <p>The 'vimtutor' command launches a built-in Vim tutorial that provides interactive lessons on how to use Vim. <br></br>
            It's a great way for beginners to learn the basics of Vim's functionality. <br></br>
          </p>

          <p>Command 24:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            touch classfile
          </SyntaxHighlighter>
          <p>The 'touch classfile' command creates an empty file named 'classfile' if it doesn't already exist. <br></br>
            If the file already exists, 'touch' updates its timestamp to the current time. <br></br>
          </p>

          <p>Command 25:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
        cat > classfile
          </SyntaxHighlighter>
          <p>The 'cat > classfile' command is used to redirect standard input into a file named 'classfile'. <br></br>
            It allows you to enter text interactively into the file until you press Ctrl + C to exit. <br></br>
          </p>

          <p>Command 26:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            cat classfile
          </SyntaxHighlighter>
          <p>The 'cat classfile' command displays the contents of the 'classfile' on the terminal. <br></br>
            It's commonly used to view the contents of text files. <br></br>
          </p>

          <p>Command 27:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
        cat >> classfile
          </SyntaxHighlighter>
          <p>The 'cat >> classfile' command appends text to the end of the 'classfile' without overwriting existing content. <br></br>
            It's useful for adding more content to a file without losing what's already there. <br></br>
          </p>

          <p>Command 28:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            tac classfile
          </SyntaxHighlighter>
          <p>The 'tac classfile' command displays the contents of the 'classfile' in reverse order, starting with the last line. <br></br>
            It's the reverse of the 'cat' command and can be useful for viewing files in a different perspective. <br></br>
          </p>

          <p>Command 29:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            more classfile
          </SyntaxHighlighter>
          <p>The 'more classfile' command displays the contents of the 'classfile' one screenful at a time, allowing you to navigate through it. <br></br>
            It's useful for viewing large files without overwhelming the terminal. <br></br>
          </p>

          <p>Command 30:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            less classfile
          </SyntaxHighlighter>
          <p>The 'less classfile' command displays the contents of the 'classfile' one screenful at a time, similar to 'more', but with more advanced features like backward navigation. <br></br>
            It's a more versatile pager for viewing files interactively. <br></br>
          </p>

          <p>Command 31:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            head classfile
          </SyntaxHighlighter>
          <p>The 'head classfile' command displays the first 10 lines of the 'classfile' by default. <br></br>
            It's useful for quickly previewing the beginning of a file. <br></br>
          </p>

          <p>Command 32:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            head -n 15 classfile
          </SyntaxHighlighter>
          <p>The 'head -n 15 classfile' command displays the first 15 lines of the 'classfile'. <br></br>
            The '-n' option allows you to specify the number of lines to display. <br></br>
          </p>

          <p>Command 33:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            tail classfile
          </SyntaxHighlighter>
          <p>The 'tail classfile' command displays the last 10 lines of the 'classfile' by default. <br></br>
            It's useful for quickly previewing the end of a file. <br></br>
          </p>

          <p>Command 34:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            tail -n 15 classfile
          </SyntaxHighlighter>
          <p>The 'tail -n 15 classfile' command displays the last 15 lines of the 'classfile'. <br></br>
            The '-n' option allows you to specify the number of lines to display. <br></br>
          </p>

          <p>Command 35:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            cp file1 file2
          </SyntaxHighlighter>
          <p>The 'cp file1 file2' command copies the contents of 'file1' into 'file2'. <br></br>
            If 'file2' already exists, it will be overwritten. <br></br>
          </p>

          <p>Command 36:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            mv file1 file2
          </SyntaxHighlighter>
          <p>The 'mv file1 file2' command moves 'file1' to 'file2' or renames 'file1' to 'file2' if they are in the same directory. <br></br>
            It's commonly used for renaming files or moving them to different directories. <br></br>
          </p>

          <p>Command 37:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            rm file
          </SyntaxHighlighter>
          <p>The 'rm file' command removes or deletes 'file' from the file system. <br></br>
            It's a powerful command and should be used with caution as it permanently deletes files. <br></br>
          </p>

          <p>Command 38:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            rm -rf directory
          </SyntaxHighlighter>
          <p>The 'rm -rf directory' command forcibly removes a directory and all its contents recursively. <br></br>
            It's a dangerous command and should be used with extreme caution as it can delete large amounts of data irreversibly. <br></br>
          </p>

          <p>Command 39:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            mkdir directory
          </SyntaxHighlighter>
          <p>The 'mkdir directory' command creates a new directory named 'directory'. <br></br>
            It's used to create directories or folders in the file system. <br></br>
          </p>

          <p>Command 40:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            rmdir directory
          </SyntaxHighlighter>
          <p>The 'rmdir directory' command removes an empty directory named 'directory' from the file system. <br></br>
            It can only delete directories that are empty. <br></br>
          </p>

          <p>Command 41:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            chmod permissions file
          </SyntaxHighlighter>
          <p>The 'chmod permissions file' command changes the permissions of a file or directory. <br></br>
            It's used to control who can read, write, and execute a file or directory. <br></br>
          </p>

          <p>Command 42:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            chown user:group file
          </SyntaxHighlighter>
          <p>The 'chown user:group file' command changes the owner and group of a file or directory. <br></br>
            It allows you to transfer ownership of a file to a different user or group. <br></br>
          </p>

          <p>Command 43:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            du file
          </SyntaxHighlighter>
          <p>The 'du file' command displays disk usage statistics for 'file'. <br></br>
            It shows the amount of disk space used by the specified file or directory. <br></br>
          </p>

          <p>Command 44:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            df
          </SyntaxHighlighter>
          <p>The 'df' command displays disk space usage statistics for all mounted file systems. <br></br>
            It shows information such as total disk space, used space, and available space. <br></br>
          </p>

          <p>Command 45:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            pwd
          </SyntaxHighlighter>
          <p>The 'pwd' command prints the current working directory to the terminal. <br></br>
            It's useful for quickly checking which directory you're in. <br></br>
          </p>

          <p>Command 46:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            echo "message"
          </SyntaxHighlighter>
          <p>The 'echo "message"' command prints 'message' to the terminal. <br></br>
            It's commonly used for displaying text or printing variables in shell scripts. <br></br>
          </p>

          <p>Command 47:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            date
          </SyntaxHighlighter>
          <p>The 'date' command prints the current date and time to the terminal. <br></br>
            It's a versatile command with various options for formatting the output. <br></br>
          </p>

          <p>Command 48:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            cal
          </SyntaxHighlighter>
          <p>The 'cal' command displays a calendar for the current month. <br></br>
            It's a simple utility for quickly checking the calendar without leaving the terminal. <br></br>
          </p>

          <p>Command 49:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            whoami
          </SyntaxHighlighter>
          <p>The 'whoami' command prints the username of the current user to the terminal. <br></br>
            It's useful for checking which user you're logged in as. <br></br>
          </p>

          <p>Command 50:</p>
          <SyntaxHighlighter language="bash" style={darcula}>
            tty
          </SyntaxHighlighter>
          <p>The 'tty' command prints the file name of the terminal connected to the standard input. <br></br>
            It's useful for identifying the terminal device you're currently using. <br></br>
          </p>

        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Learn
