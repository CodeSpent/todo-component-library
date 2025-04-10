import React, { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/card'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Checkbox } from './components/ui/checkbox'
import { Select, SelectOption } from './components/ui/select'
import { Textarea } from './components/ui/textarea'
import { Alert, AlertTitle, AlertDescription } from './components/ui/alert'
import { Badge } from './components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from './components/ui/avatar'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './components/ui/dialog'
import { Switch } from './components/ui/switch'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './components/ui/dropdown-menu'
import { Tooltip } from './components/ui/tooltip'
import { Separator } from './components/ui/separator'

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete project documentation', completed: false, priority: 'high' },
    { id: 2, text: 'Review pull requests', completed: true, priority: 'medium' },
    { id: 3, text: 'Update dependencies', completed: false, priority: 'low' },
  ])

  return (
    <div className="min-h-screen p-8 space-y-8">
      {/* Todo List Header */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Todo List</h1>
          <Button onClick={() => setIsDialogOpen(true)}>Add Todo</Button>
        </div>
        <Separator />
      </section>

      {/* Todo List */}
      <section className="space-y-4">
        {todos.map((todo) => (
          <Card key={todo.id} className="w-full">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Switch
                    checked={todo.completed}
                    onCheckedChange={(checked) => {
                      setTodos(todos.map(t => 
                        t.id === todo.id ? { ...t, completed: checked } : t
                      ))
                    }}
                  />
                  <div>
                    <p className={`text-lg ${todo.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {todo.text}
                    </p>
                    <Badge variant={todo.priority === 'high' ? 'destructive' : todo.priority === 'medium' ? 'default' : 'secondary'}>
                      {todo.priority}
                    </Badge>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Add Todo Dialog */}
      {isDialogOpen && (
        <Dialog>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Todo</DialogTitle>
              <DialogDescription>
                Create a new todo item
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="todo-text">Todo Text</Label>
                <Input id="todo-text" placeholder="Enter todo text" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select id="priority">
                  <SelectOption value="low">Low</SelectOption>
                  <SelectOption value="medium">Medium</SelectOption>
                  <SelectOption value="high">High</SelectOption>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>
                Add Todo
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

export default App 